import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(){
    return(
        <>
            <Header loggedIn={true}/>
            <SearchForm/>
            <MoviesCardList isSavedMoviesPage={true}/>
            <Footer/>
        </>
    )
}

export default SavedMovies;