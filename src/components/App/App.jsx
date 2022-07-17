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
    const [status, setStatus] = useState();
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
    const history = useNavigate();

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
                <Route path="/signup" element={<Register onRegister={handleRegister}/>}> </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <InfoToolTip status={status} isOpen={isInfoTooltipOpen} closePopup={handleClose}/>
        </div>
    );
}

export default App;
