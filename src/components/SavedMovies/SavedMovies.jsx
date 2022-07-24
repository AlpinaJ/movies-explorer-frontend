import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {stringToBool} from "../../utils/constants";
import {shortMovieDuration} from "../../utils/constants";

function SavedMovies({handleDelete, movies}){
    const [isShort, setIsShort] = React.useState(stringToBool(localStorage.getItem('isShort')));
    const initialSavedMovies = isShort ?
        (movies.filter((movie)=>movie.duration<=shortMovieDuration)):
        (movies);
    const [moviesToRender, setMoviesToRender]=React.useState(initialSavedMovies);
    const [shortMovies, setShortMovies] = React.useState(movies.filter((movie)=>movie.duration<=shortMovieDuration));
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
    const [isNotFound, setIsNotFound] = React.useState(false);
    const [savedMoviesKeyword, setSavedMoviesKeyword]=React.useState("");

    function setDefaultStates() {
        setMoviesToRender([]);
        setIsNotFound(false);
    }

    function handleSearch(keyword){
        setFilteredShortMovies([]);
        setFilteredMovies([]);
        let filterMovies = movies;
        if (keyword !== "" && keyword!==null) {
            filterMovies = movies.filter((movie) =>
                movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        }
        setFilteredShortMovies(filterMovies.filter((movie) => movie.duration <= shortMovieDuration));
        setFilteredMovies(filterMovies);
        setSavedMoviesKeyword(keyword);
        localStorage.setItem("keyword", keyword);
    }

    function handleShortClick() {
        localStorage.setItem("isShort", String(!isShort));
        setIsShort(!isShort);
    }

    function getRenderMovies(movies){
        setMoviesToRender(movies);
        setIsNotFound(movies.length===0 );
    }

    function renderMovies() {
        if (isShort && filteredShortMovies.length!==0) {
            getRenderMovies(filteredShortMovies);
        }
        if (isShort && filteredShortMovies.length===0) {
            if(savedMoviesKeyword!=="") {
                getRenderMovies([])
            }
            else{
                getRenderMovies(shortMovies);
            }
        }
        if (!isShort && filteredMovies.length!==0) {
            getRenderMovies(filteredMovies);
        }
        if (!isShort && filteredMovies.length===0) {
            if(savedMoviesKeyword!=="") {
                getRenderMovies([])
            }
            else{
                getRenderMovies(movies);
            }
        }
    }

    function handleClick(id){
       handleDelete(id);
       setMoviesToRender(moviesToRender.filter((movie)=>movie._id!==id));
    }

    React.useEffect(() => {
        renderMovies();
    }, [isShort, filteredMovies, filteredShortMovies]);

    // React.useEffect(()=>{
    //         renderMovies();
    // }, [])


    return(
        <>
            <Header loggedIn={true} isSavedMovies={true}/>
            <main>
                <SearchForm
                    onSearch={handleSearch}
                    checked={isShort}
                    onCheckClick={handleShortClick}
                    initialKeyword={""}
                />
                <MoviesCardList
                    isSavedMoviesPage={true}
                    isMoreButton={false}
                    savedMovies={movies}
                    movies={moviesToRender}
                    handleClick={handleClick}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;