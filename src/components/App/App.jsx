import React, {useState, useEffect} from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import {Route, useNavigate} from "react-router-dom";
import {Routes} from "react-router-dom";
import InfoToolTip from "../InfoTooltip/InfoTooltip";
import "./App.css";
import api from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import getMovies from "../../utils/MoviesApi";
import {CurrentUserContext} from "../../context/CurrentUserContext";

function App() {
    const [allMovies, setAllMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [status, setStatus] = useState();
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useNavigate();
    const [currentUser, setCurrentUser] = useState({
        "email": "",
        "name": "",
        "id": ""
    });

    function setDefaultStates() {
        localStorage.removeItem("isShort");
        localStorage.removeItem("keyword");
    }

    function handleRegister({name, email, password}) {
        api.register(name, email, password).then((res) => {
            if (res.data) {
                setStatus(true);
                setInfoTooltipOpen(true);
                handleLogin({email, password}).then((res) => {
                    return res;
                })
            } else {
                setStatus(false);
                setInfoTooltipOpen(true);
            }
        }).catch((err) => {
            setStatus(false);
            setInfoTooltipOpen(true);
        })
    }

    function handleClose() {
        setInfoTooltipOpen(false);
        if (status) {
            history('/movies');
        }
    }

    function handleLogin({email, password}) {
        tokenCheck();
        return api.login(email, password).then((res) => {
            if (res['message'] === 'success') {
                setLoggedIn(true);
                setStatus(true);
                setInfoTooltipOpen(true);
                history('/movies');
            } else {
                setStatus(false);
                setInfoTooltipOpen(true);
            }
        }).catch((err) => {
            setStatus(false);
            setInfoTooltipOpen(true);
            console.log(err);
        })
    }

    function handleLogout() {
        setLoggedIn(false);
        setCurrentUser({
            "email": "",
            "name": "",
            "id": ""
        })
        api.logout().then((res) => {
            setDefaultStates();
            history('/signin');
        }).catch((err) => console.log(err));
    }

    function handleChangeUserInfo(user) {
        api.patchUserInfo(user).then((res) => {
            setCurrentUser(res);
        }).catch(err => {
            console.log(err);
        })
    }

    function tokenCheck() {
        Promise.all([api.getUserInfo(), getMovies()])
            .then((res) => {
                setCurrentUser(res[0]);
                setAllMovies(res[1]);
                setLoggedIn(true);
                api.getMovies()
                    .then((movies) => {
                        const moviesToShow = movies.data.filter((movie) => movie.owner === currentUser.id);
                        setSavedMovies(moviesToShow);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleMovieSaveOrDelete({
                                         country, director, duration, year, description,
                                         image, trailerLink, thumbnail, movieId, nameRU,
                                         nameEN
                                     }) {
        const isSaved = savedMovies.some((i) => i.nameRU === nameRU);
        if (!isSaved) {
            api.saveMovie(country, director, duration, year, description,
                image, trailerLink, thumbnail, movieId, nameRU, nameEN)
                .then((movie) => {
                    setSavedMovies([movie, ...savedMovies]);

                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const movieToDelete = savedMovies.find((i) => i.nameRU === nameRU);
            handleMovieDelete(movieToDelete._id);
        }
    }

    const handleMovieDelete = (movieId) => {
        api.deleteMovie(movieId)
            .then(() => {
                setSavedMovies((movies) =>
                    movies.filter((m) => m._id !== movieId));
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        tokenCheck();
    }, [history]);

    useEffect(() => {
        if (loggedIn) {
            api.getUserInfo().then((values) => {
                setCurrentUser(values);
                // history('/movies');
            }).catch((err) => {
                console.log(err);
            });

        }
    }, [loggedIn])


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={<Main loggedIn={loggedIn}/>}>
                    </Route>
                    <Route
                        path="/movies"
                        element={<ProtectedRoute
                            isLoggedIn={loggedIn}
                            children={<Movies
                                handleSaveOrDelete={handleMovieSaveOrDelete}
                                allMovies={allMovies}
                                savedMovies={savedMovies}
                            />}
                        />}
                    >
                    </Route>
                    <Route
                        path="/saved-movies"
                        element={<ProtectedRoute
                            isLoggedIn={loggedIn}
                            children={<SavedMovies
                                handleDelete={handleMovieDelete}
                                movies={savedMovies}/>}
                        />}
                    >
                    </Route>
                    <Route
                        path="/profile"
                        element={<ProtectedRoute
                            isLoggedIn={loggedIn}
                            children={<Profile
                                onSubmit={handleChangeUserInfo}
                                onLogout={handleLogout}
                                currentUser={currentUser}
                            />}
                        />
                        }>
                    </Route>
                    <Route
                        path="/signin"
                        element={<Login
                            onLogin={handleLogin}/>}>
                    </Route>
                    <Route
                        path="/signup"
                        element={<Register
                            onRegister={handleRegister}/>}>
                    </Route>
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
                <InfoToolTip
                    status={status}
                    isOpen={isInfoTooltipOpen}
                    closePopup={handleClose}/>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
