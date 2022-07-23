import React, {useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import getMovies from "../../utils/MoviesApi";
import {useMediaPredicate} from "react-media-hook";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

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
            return 12;
        }
        if (isDesktop) {
            return 9;
        }
        if (isPad) {
            return 8;
        }
        return 5;
    }

    function addMoreFilms() {
        if (isBigDesktop) {
            setMaxMoviesNumber(maxMoviesNumber + 4);
        } else {
            if (isDesktop) {
                setMaxMoviesNumber(maxMoviesNumber + 3);
            } else {
                setMaxMoviesNumber(maxMoviesNumber + 2);
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
        setShortMovies(allMovies.filter((movie) => movie.duration <= 40));
        renderMovies();
    }, [allMovies])

    function handleSearch(keyword) {
        setDefaultStates();
        let filterMovies = allMovies;
        if (keyword !== "" && keyword!==null) {
            filterMovies = allMovies.filter((movie) =>
                movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        }
        setFilteredShortMovies(filterMovies.filter((movie) => movie.duration <= 40));
        setFilteredMovies(filterMovies);
        localStorage.setItem("keyword", keyword);
    }

    function handleShortClick() {
        localStorage.setItem("isShort", String(!isShort));
        setIsShort(!isShort);
    }

    function renderMovies() {
        const keyword = localStorage.getItem("keyword");
        if (isShort && keyword!=="null") {
            getRenderMovies(filteredShortMovies);
        }
        if (isShort && keyword==="null") {
            getRenderMovies(shortMovies);
        }
        if (!isShort && keyword!=="null") {
            getRenderMovies(filteredMovies);
        }
        if (!isShort && keyword==="null") {
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
                />
            </main>
            <Footer/>
        </>
    )
}

export default Movies;