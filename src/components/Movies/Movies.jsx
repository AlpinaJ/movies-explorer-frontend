import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import getMovies from "../../utils/MoviesApi";
import {useMediaPredicate} from "react-media-hook";

function Movies() {
    const isPad = useMediaPredicate("(min-width: 481px)");
    const isDesktop = useMediaPredicate("(min-width: 768px)");
    const [allMovies, setAllMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filteredLongMovies, setFilteredLongMovies] = React.useState([]);
    const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
    const [moviesToRender, setMoviesToRender] = React.useState([]);
    const [maxMoviesNumber, setMaxMoviesNumber] = React.useState(setInitialMoviesNumber());
    const [isShort, setIsShort] = React.useState(true);

    function setInitialMoviesNumber() {
        if (isDesktop) {
            return 12;
        }
        if (isPad) {
            return 8;
        }
        return 5;
    }

    function addMoreFilms() {
        if (isDesktop) {
            return 3;
        }
        return 2;
    }


    function getRenderMovies(movies) {
        const result = [];
        for (let i = 0; i < maxMoviesNumber && i < movies.length; i = i + 1) {
            result.push(movies[i]);
        }
        setMoviesToRender(result);
    }

    function renderMovies(movies) {
        if (movies === undefined) {
            getRenderMovies(allMovies);
        } else {
            getRenderMovies(movies);
        }

    }

    function handleSearch(keyword) {
        const filterMovies = allMovies.filter((movie) =>
            movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        const shortFilterMovies = filterMovies.filter((movie) =>
            movie.duration <= 40);
        const longFilterMovies = filterMovies.filter((movie) =>
            movie.duration > 40);
        setFilteredShortMovies(shortFilterMovies);
        setFilteredLongMovies(longFilterMovies);

    }

    function handleShortClick() {
        setIsShort(!isShort);
    }


    React.useEffect(() => {
        if (allMovies.length === 0) {
            getMovies().then((movies) => {
                setAllMovies(movies);
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [])

    React.useEffect(() => {
        renderMovies();
    }, [allMovies]);

    React.useEffect(() => {
        if (isShort) {
            console.log("render short");
            renderMovies(filteredShortMovies)
        } else {
            console.log("render long");
            renderMovies(filteredLongMovies);
        }
    }, [maxMoviesNumber, isShort, filteredLongMovies, filteredShortMovies]);

    return (
        <>
            <Header loggedIn={true} isMovies={true}/>
            <main>
                <SearchForm onSearch={handleSearch}
                            checked={isShort}
                            onCheckClick={handleShortClick}/>
                <MoviesCardList
                    isSavedMoviesPage={false}
                    isMoreButton={true}
                    movies={moviesToRender}
                />
            </main>
            <Footer/>
        </>
    )
}

export default Movies;