import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SearchForm from "../SearchForm/SearchForm";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}> </Route>
                <Route path="/movies" element={<Movies/>}> </Route>
                <Route path="/saved-movies" element={<SavedMovies/>}> </Route>
                <Route path="/profile" element={
                    <Profile
                        username={"Виталий"}
                        useremail={"pochta@yandex.ru"}
                    />
                }>
                </Route>
                <Route path="/signin" element={<Login/>}> </Route>
                <Route path="/signup" element={<Register/>}> </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
