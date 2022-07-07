import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(){
    return(
        <>
            <Header loggedIn={true}/>
            <SearchForm/>
            <MoviesCardList isSavedMoviesPage={false}/>
            <Footer/>
        </>
    )
}

export default Movies;