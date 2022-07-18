import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import getMovies from "../../utils/MoviesApi";
import {useMediaPredicate} from "react-media-hook";

function Movies(){
    const isPad = useMediaPredicate("(min-width: 481px)");
    const isDesktop = useMediaPredicate("(min-width: 768px)");
    const [allMovies, setAllMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [filteredLongMovies, setFilteredLongMovies] = React.useState([]);
    const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
    const [moviesToRender, setMoviesToRender] = React.useState([]);
    const [maxMoviesNumber, setMaxMoviesNumber] = React.useState(setInitialMoviesNumber());

    function setInitialMoviesNumber(){
        if (isDesktop){
            return 12;
        }
        if (isPad){
            return 8;
        }
        return 5;
    }

    const addMoreFilms = ()=>{
        if (isDesktop){
            return 3;
        }
        return 2;
    }

    React.useEffect(()=>{
        if(allMovies.length === 0){
            getMovies().then((movies)=>{
                setAllMovies(movies);
            })
                .catch((err)=>{
                    console.log(err);
                })
        }
    },[])

    function getRenderMovies(movies){
        const result = [];
        for (let i = 0; i < maxMoviesNumber && i < movies.length; i =i+1) {
            result.push(movies[i]);
        }
        setMoviesToRender(result);
    }

    function renderMovies(){
        getRenderMovies(allMovies);
    }

    React.useEffect(() => {
        renderMovies();
    }, [filteredMovies, filteredLongMovies, maxMoviesNumber, allMovies]);

    return(
        <>
            <Header loggedIn={true} isMovies={true}/>
            <main>
                <SearchForm/>
                <MoviesCardList
                    isSavedMoviesPage={false}
                    isMoreButton={true}
                    movies = {moviesToRender}
                />
            </main>
            <Footer/>
        </>
    )
}

export default Movies;