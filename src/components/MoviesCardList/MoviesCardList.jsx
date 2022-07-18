import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({isSavedMoviesPage, isMoreButton,handleMoreButtonClick, movies}) {
    return (
        <section className="movies-card-list">
                    <ul className="movies-card-list__container">
                        {movies.map((movie)=>(
                            <MoviesCard
                                movie={movie}
                                key={movie.id}
                                isSaved={false}
                                isInSavedMovies={isSavedMoviesPage}
                            />
                        ))}
                    </ul>
            {isMoreButton?(
                <button className="more-button" onClick={handleMoreButtonClick}>Ёще</button>
            ):(
                <div className="more-button_disable"></div>
            )}
        </section>
    )
}

export default MoviesCardList;