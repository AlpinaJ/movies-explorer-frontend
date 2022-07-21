import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({onLogout, onSubmit, currentUser}) {
    const [userName, setUserName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");

    function handleChangeName(e) {
        const input = e.target;
        setUserName(input.value);
    }

    function handleChangeEmail(e) {
        const input = e.target;
        setUserEmail(input.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit({email:userEmail,name:userName});
    }

    React.useEffect(() => {
        setUserName(currentUser.name);
        setUserEmail(currentUser.email);
    }, [currentUser]);

    React.useEffect(() => {
        const editButton = document.querySelector(".profile__edit-button");
        if((userName !== currentUser.name) || (userEmail !== currentUser.email)){
            editButton.classList.remove("profile__edit-button_disabled");
        }
        else{
            editButton.classList.add("profile__edit-button_disabled");
        }
    }, [currentUser, userName, userEmail]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header loggedIn={true}/>
            <main className="profile">
                <div className="profile__container">
                    <h1 className="profile__heading">Привет, {userName}!</h1>
                    <form className="profile__form" onSubmit={handleSubmit}>
                        <div className="profile__input-container">
                            <label className="profile__lable">Имя</label>
                            <input
                                className="profile__input"
                                type="text"
                                name="name"
                                minLength="2"
                                maxLength="40"
                                required
                                value={userName || ''}
                                onChange={handleChangeName}
                            />
                        </div>
                        <div className="profile__input-container">
                            <label className="profile__lable">E-mail</label>
                            <input
                                className="profile__input"
                                type="email"
                                name="email"
                                minLength="2"
                                maxLength="40"
                                required
                                value={userEmail || ''}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <button type="submit"
                                onSubmit={onSubmit}
                                className="profile__edit-button profile__edit-button_disabled">
                            Редактировать
                        </button>
                    </form>
                    <Link to="/signin" onClick={onLogout} className="profile__logout">
                            Выйти из аккаунта
                    </Link>
                </div>
            </main>
        </CurrentUserContext.Provider>
    )
}

export default Profile;