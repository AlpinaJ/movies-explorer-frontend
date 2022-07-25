import React from "react";
import "./MoviesCard.css";
import {minutesToHours} from "../../utils/constants";

function MoviesCard({movie, isSaved, isSavedMoviesPage, handleCLick}) {

    function handleCardClick() {
        if (!isSavedMoviesPage) {
            handleCLick({
                nameRU: movie.nameRU || movie.nameEN,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                duration: movie.duration,
                country: movie.country || "null",
                director: movie.director || "null",
                year: movie.year,
                description: movie.description,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id.toString(),
                nameEN: movie.nameEN || "null",
            });
        } else {
            handleCLick(movie._id)
        }
    }

    return (
        <div className="card">
            <a
                href={movie.trailerLink}
                className="card__link"
                target="_blank"
                rel="nooperen noreferrer"
            >
                <img src={isSavedMoviesPage ? (movie.image) : (`https://api.nomoreparties.co${movie.image.url}`)}
                     alt={movie.nameRU} className="card__image"/>
            </a>
            <div className="card__info">
                <h4 className="card__name">{movie.nameRU}</h4>
                <p className="card__duration">{minutesToHours(movie.duration)}</p>
                {isSavedMoviesPage ?
                    (<button type="button" className="card__button card__button_delete"
                             onClick={handleCardClick}></button>)
                    : (isSaved ?
                        (<button type="button"
                                 className="card__button card__button_saved"
                                 onClick={handleCardClick}></button>)
                        : (<button type="button"
                                   className="card__button card__button_unsaved"
                                   onClick={handleCardClick}></button>))}
            </div>
        </div>
    )
}

export default MoviesCard;