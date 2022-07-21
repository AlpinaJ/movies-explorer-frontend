import React from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({movie, isSaved, isSavedMoviesPage, handleCLick}) {
    const [isInSaved, setIsInSaved] = React.useState(isSaved);

    function handleCardClick() {
        if (!isSavedMoviesPage) {
            setIsInSaved(!isInSaved);
            handleCLick({
                nameRU: movie.nameRU || movie.nameEN,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                duration: movie.duration,
                country: movie.country || "",
                director: movie.director || "",
                year: movie.year,
                description: movie.description,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id.toString(),
                nameEN: movie.nameEN || "",
            });
        }
        else {
            handleCLick(movie._id)
        }
    }

    return (
            <div className="card">
                <img src={isSavedMoviesPage?(movie.image):(`https://api.nomoreparties.co${movie.image.url}`)}
                     alt={movie.nameRU} className="card__image"/>
                <div className="card__info">
                    <h4 className="card__name">{movie.nameRU}</h4>
                    <p className="card__duration">{movie.duration}</p>
                    {isSavedMoviesPage?
                        (<button type="button" className="card__button card__button_delete"
                                 onClick={handleCardClick}></button>)
                        : (isInSaved ?
                            (<button type="button" className="card__button card__button_saved"
                                     onClick={handleCardClick}></button>)
                            : (<button type="button" className="card__button card__button_unsaved"
                                       onClick={handleCardClick}></button>))}
                </div>
            </div>
    )
}

export default MoviesCard;