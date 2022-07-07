import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import card1Path from "../../images/cards/card1.png";
import card2Path from "../../images/cards/card2.png";
import card3Path from "../../images/cards/card3.png";
import card4Path from "../../images/cards/card4.png";
import card5Path from "../../images/cards/card5.png";
import card6Path from "../../images/cards/card6.png";
import card7Path from "../../images/cards/card7.png";
import card8Path from "../../images/cards/card8.png";
import card9Path from "../../images/cards/card9.png";
import card10Path from "../../images/cards/card10.png";
import card11Path from "../../images/cards/card11.png";
import card12Path from "../../images/cards/card12.png";
import card13Path from "../../images/cards/card13.png";
import card14Path from "../../images/cards/card14.png";
import card15Path from "../../images/cards/card15.png";
import card16Path from "../../images/cards/card16.png";

function MoviesCardList({isSavedMoviesPage}) {
    return (
        <div className="movies-card-list">
            {isSavedMoviesPage ? (
                    <div className="movies-card-list__container">
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card1Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card2Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card3Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                    </div>
                ) :
                (
                    <div className="movies-card-list__container">
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card1Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card2Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card3Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card4Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card5Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card6Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card7Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card8Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card9Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card10Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card11Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card12Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card13Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card14Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card15Path}
                            isSaved={false}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                        <MoviesCard
                            name={"33 слова о дизайне"}
                            duration={"1ч42м"}
                            image={card16Path}
                            isSaved={true}
                            isInSavedMovies={isSavedMoviesPage}
                        />
                    </div>
                )}

        </div>
    )
}

export default MoviesCardList;