import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(){
    return(
        <>
            <Header loggedIn={true} isMovies={true}/>
            <main>
                <SearchForm/>
                <MoviesCardList isSavedMoviesPage={false} isMoreButton={true}/>
            </main>
            <Footer/>
        </>
    )
}

export default Movies;