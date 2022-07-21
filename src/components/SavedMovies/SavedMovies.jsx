import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({handleDelete, movies}){
    console.log("saved movies in Saved", movies);
    return(
        <>
            <Header loggedIn={true} isSavedMovies={true}/>
            <main>
                <SearchForm/>
                <MoviesCardList
                    isSavedMoviesPage={true}
                    isMoreButton={false}
                    savedMovies={movies}
                    movies={movies}
                    handleClick={handleDelete}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies;