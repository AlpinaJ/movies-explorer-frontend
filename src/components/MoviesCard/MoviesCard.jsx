import React from "react";
import "./MoviesCard.css";

function MoviesCard({movie, isSaved, isInSavedMovies}) {
    return (
        <div className="card">
            <img src={`https://api.nomoreparties.co${movie.image.url}`}
                 alt={movie.nameRU} className="card__image"/>
            <div className="card__info">
                <h4 className="card__name">{movie.nameRU}</h4>
                <p className="card__duration">{movie.duration}</p>
                {isInSavedMovies ?
                    (<button type="button" className="card__button card__button_delete"></button>)
                    :(isSaved ?
                        (<button type="button" className="card__button card__button_saved"></button>)
                    :(<button type="button" className="card__button card__button_unsaved"></button>))}
            </div>
        </div>
    )
}

export default MoviesCard;