import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {stringToBool} from "../../utils/constants";

function SavedMovies({handleDelete, movies}){
    const [isShort, setIsShort] = React.useState(stringToBool(localStorage.getItem('isShort')));
    const initialSavedMovies = isShort ?
        (movies.filter((movie)=>movie.duration<=40)):
        (movies);
    const [moviesToRender, setMoviesToRender]=React.useState(initialSavedMovies);

    function handleSearch(keyword){
        let filteredMovies =  movies.filter((movie) => movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        if(isShort){
            setMoviesToRender(filteredMovies.filter((movie) => movie.duration<=40));
        }
        else{
            setMoviesToRender(filteredMovies);
        }

    }

    function handleShortClick() {
        setIsShort(!isShort);
        handleSearch(localStorage.getItem("keyword"));
    }

    function handleClick(id){
       handleDelete(id);
       setMoviesToRender(moviesToRender.filter((movie)=>movie._id!==id));
    }

    return(
        <>
            <Header loggedIn={true} isSavedMovies={true}/>
            <main>
                <SearchForm
                    onSearch={handleSearch}
                    checked={isShort}
                    onCheckClick={handleShortClick}
                    needKeyword={false}
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