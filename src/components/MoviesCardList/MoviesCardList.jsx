import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({isSavedMoviesPage, isMoreButton,handleMoreButtonClick,
                            movies, handleClick, savedMovies, preloaderIsVisible}) {
    function isMovieInSavedMovies(movie){
        if(savedMovies.length!==0){
            for(let i=0;i<savedMovies.length;i=i+1){
                if(savedMovies[i].nameRU===movie.nameRU){
                    return true;
                }
            }
        }
        return false;
    }

    return (
        <section className="movies-card-list">
            <Preloader isVisible={preloaderIsVisible}/>
            <p className={movies.length === 0? ("not-found") : ("not-found_hidden")}>
                Ничего не найдено
            </p>
            {movies.length !== 0?(
                    <ul className="movies-card-list__container">
                        {movies.map((movie)=>(
                            <MoviesCard
                                movie={movie}
                                key={movie.id}
                                isSaved={isMovieInSavedMovies(movie)}
                                isSavedMoviesPage={isSavedMoviesPage}
                                handleCLick={handleClick}
                            />
                        ))}
                    </ul>
            ):(<ul className="movies-card-list__container"></ul>)}
            {isMoreButton?(
                <button className="more-button" onClick={handleMoreButtonClick}>Ёще</button>
            ):(
                <div className="more-button_disable"></div>
            )}
        </section>
    )
}

export default MoviesCardList;