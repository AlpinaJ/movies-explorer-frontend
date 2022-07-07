import "./MoviesCard.css";

function MoviesCard({name, image, duration, isSaved, isInSavedMovies}) {
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="card__info">
                <h4 className="card__name">{name}</h4>
                <p className="card__duration">{duration}</p>
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