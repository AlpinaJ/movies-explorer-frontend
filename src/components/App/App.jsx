import React, {useState, useEffect}  from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SearchForm from "../SearchForm/SearchForm";
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

function App() {
    console.log(api._url);
    const [status, setStatus] = useState();
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useNavigate();
    const [currentUser, setCurrentUser] = useState({
        "email": "",
        "name": ""
    });

    function handleRegister({name,email, password}){
        api.register(name, email, password).then((res)=>{
            if (res.data){
                setStatus(true);
                setInfoTooltipOpen(true);
                return res;
            }
            else {
                setStatus(false);
                setInfoTooltipOpen(true);
            }
        }).catch((err) => {
            setStatus(false);
            setInfoTooltipOpen(true);
        })
    }

    function handleClose(){
        setInfoTooltipOpen(false);
        if (status) {
            history('/signin');
        }
    }

    function handleLogin({email, password}) {
        tokenCheck();
        return api.login(email, password).then((res) => {
            if (res['message'] === 'success') {
                setLoggedIn(true);
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
        console.log(1);
        setLoggedIn(false);
        api.logout().then((res) => {
            console.log("ga");
            history('/signin');
        }).catch((err) => console.log(err));
    }

    function handleChangeUserInfo(user){
        api.patchUserInfo(user).then((res)=>{
            setCurrentUser(res);
        }).catch(err=>{
            console.log(err);
        })
    }

    function tokenCheck() {
        api.getUserInfo()
            .then((res) => {
                setLoggedIn(true);
            })
            .catch((err) => {
                console.log("error1", err);
            });
    }


    useEffect(() => {
        tokenCheck();
    }, [history]);

    useEffect(()=>{
        if(loggedIn){
            api.getUserInfo().then((values)=>{
                setCurrentUser(values);
                history('/movies')
            })
        }
    }, [loggedIn])



    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>}> </Route>
                <Route path="/movies" element={<Movies/>}> </Route>
                <Route path="/saved-movies" element={<SavedMovies/>}> </Route>
                <Route path="/profile" element={
                    <Profile
                        onSubmit={handleChangeUserInfo}
                        onLogout={handleLogout}
                        currentUser={currentUser}
                    />
                }>
                </Route>
                <Route path="/signin" element={<Login onLogin={handleLogin}/>}> </Route>
                <Route path="/signup" element={<Register onRegister={handleRegister}/>}> </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <InfoToolTip status={status} isOpen={isInfoTooltipOpen} closePopup={handleClose}/>
        </div>
    );
}

export default App;
