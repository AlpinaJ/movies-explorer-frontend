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
        (movies.filter((movie)=>movie.duration>40));
    const [moviesToRender, setMoviesToRender]=React.useState(initialSavedMovies);

    function handleSearch(keyword){
        if(isShort){
            let result =  movies.filter((movie) => movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            result = result.filter((movie) => movie.duration>40);
            setMoviesToRender(result);
        }
        else{
            let result =  movies.filter((movie) => movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            result= result.filter((movie) => movie.duration<=40);
            setMoviesToRender(result);
        }

    }

    function handleShortClick() {
        setIsShort(!isShort);
        handleSearch(localStorage.getItem("keyword"));
    }

    // function handleClick(){
    //     handleDelete();
    //     movies = JSON.parse(localStorage.getItem("savedMovies"));
    //     moviesToRender(movies);
    // }

    return(
        <>
            <Header loggedIn={true} isSavedMovies={true}/>
            <main>
                <SearchForm
                    onSearch={handleSearch}
                    checked={isShort}
                    onCheckClick={handleShortClick}
                />
                <MoviesCardList
                    isSavedMoviesPage={true}
                    isMoreButton={false}
                    savedMovies={movies}
                    movies={moviesToRender}
                    handleClick={handleDelete}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;