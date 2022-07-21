import React, {useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {stringToBool} from "../../utils/constants";

function SavedMovies({handleDelete, movies}){
    const [isShort, setIsShort] = React.useState(stringToBool(localStorage.getItem('isShort')));

    function handleSearch(keyword){
        if(isShort){
            return movies.filter((movie) => movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            && movie.duration<=40);
        }
        else{
            return movies.filter((movie) => movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                && movie.duration>40);
        }

    }

    function handleShortClick() {
        localStorage.setItem("isShort", String(!isShort));
        setIsShort(!isShort);
    }

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
                    movies={isShort?(movies.filter((movie)=>movie.duration<=40)):(movies.filter((movie)=>movie.duration>40))}
                    handleClick={handleDelete}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;