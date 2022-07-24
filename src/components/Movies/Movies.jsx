import React, {useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useMediaPredicate} from "react-media-hook";
import {initialMoviesNumberBigDesktop,
        initialMoviesNumberDesktop,
        initialMoviesNumberPad,
        initialMoviesNumberMobile,
        addMoviesNumberBigDesktop,
        addMoviesNumberDesktop,
        addMoviesNumberDefault,
        shortMovieDuration} from "../../utils/constants";

function Movies({handleSaveOrDelete, allMovies, savedMovies}) {
    const isPad = useMediaPredicate("(min-width: 577px)");
    const isDesktop = useMediaPredicate("(min-width: 985px)");
    const isBigDesktop = useMediaPredicate("(min-width: 1257px)");
    const [shortMovies, setShortMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
    const [moviesToRender, setMoviesToRender] = React.useState([]);
    const [maxMoviesNumber, setMaxMoviesNumber] = React.useState(setInitialMoviesNumber());
    const [isShort, setIsShort] = React.useState(stringToBool(localStorage.getItem('isShort')));
    const [isNotFound, setIsNotFound] = React.useState(false);
    const [isMore, setIsMore] = React.useState(false);
    const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);

    function stringToBool(string) {
        return string !== "false";
    }

    function setDefaultStates() {
        setMaxMoviesNumber(setInitialMoviesNumber);
        setMoviesToRender([]);
        setIsNotFound(false);
    }

    function setInitialMoviesNumber() {
        if (isBigDesktop) {
            return initialMoviesNumberBigDesktop;
        }
        if (isDesktop) {
            return initialMoviesNumberDesktop;
        }
        if (isPad) {
            return initialMoviesNumberPad;
        }
        return initialMoviesNumberMobile;
    }

    function addMoreFilms() {
        if (isBigDesktop) {
            setMaxMoviesNumber(maxMoviesNumber + addMoviesNumberBigDesktop);
        } else {
            if (isDesktop) {
                setMaxMoviesNumber(maxMoviesNumber + addMoviesNumberDesktop);
            } else {
                setMaxMoviesNumber(maxMoviesNumber + addMoviesNumberDefault);
            }
        }
    }


    function getRenderMovies(movies) {
        const result = [];
        for (let i = 0; i < maxMoviesNumber && i < movies.length; i = i + 1) {
            result.push(movies[i]);
        }
        setMoviesToRender(result);
        setIsNotFound(result.length===0);

        setTimeout(() => {
            if (movies.length > maxMoviesNumber) {
                setIsMore(true);
            } else {
                setIsMore(false);
            }
        }, 300);
    }

    React.useEffect(() => {
        setShortMovies(allMovies.filter((movie) => movie.duration <= shortMovieDuration));
        renderMovies();
    }, [allMovies])

    function handleSearch(keyword) {
        setDefaultStates();
        setPreloaderIsVisible(true);
        let filterMovies = allMovies;
        if (keyword !== "" && keyword!==null) {
            filterMovies = allMovies.filter((movie) =>
                movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        }
        setFilteredShortMovies(filterMovies.filter((movie) => movie.duration <= shortMovieDuration));
        setFilteredMovies(filterMovies);
        localStorage.setItem("keyword", keyword);
    }

    function handleShortClick() {
        localStorage.setItem("isShort", String(!isShort));
        setIsShort(!isShort);
    }

    function renderMovies() {
        setPreloaderIsVisible(false);
        const keyword = localStorage.getItem("keyword");
        const emptyKeyword = (keyword==="" ||keyword==="null")
        if (isShort && !emptyKeyword) {
            getRenderMovies(filteredShortMovies);
        }
        if (isShort && emptyKeyword) {
            getRenderMovies(shortMovies);
        }
        if (!isShort && !emptyKeyword) {
            getRenderMovies(filteredMovies);
        }
        if (!isShort && emptyKeyword) {
            getRenderMovies(allMovies);
        }
    }

    React.useEffect(() => {
        renderMovies();
    }, [maxMoviesNumber, isShort, filteredMovies, filteredShortMovies]);

    React.useEffect(()=>{
        if(localStorage.getItem("keyword")!==""){
            handleSearch(localStorage.getItem("keyword"));
        }
        else{
            renderMovies();
        }
    }, [])

    return (
        <>
            <Header loggedIn={true} isMovies={true}/>
            <main>
                <SearchForm onSearch={handleSearch}
                            checked={isShort}
                            onCheckClick={handleShortClick}
                            initialKeyword={localStorage.getItem("keyword")}
                />
                <MoviesCardList
                    isSavedMoviesPage={false}
                    isMoreButton={isMore}
                    handleMoreButtonClick={addMoreFilms}
                    movies={moviesToRender}
                    savedMovies={savedMovies}
                    handleClick={handleSaveOrDelete}
                    notFound={isNotFound}
                    preloaderIsVisible={preloaderIsVisible}
                />
            </main>
            <Footer/>
        </>
    )
}

export default Movies;