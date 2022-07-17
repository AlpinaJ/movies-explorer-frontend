import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile({onLogout, onSubmit}) {
    const [userName, setUserName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");

    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    function handleChangeEmail(e) {
        setUserEmail(e.target.value);
    }


    return (
        <>
            <Header loggedIn={true}/>
            <main className="profile">
                <div className="profile__container">
                    <h1 className="profile__heading">Привет, {userName}!</h1>
                    <form className="profile__form">
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
                                onChange={handleChangeName}
                            />
                        </div>
                        <button type="submit" onSubmit={onSubmit} className="profile__edit-button">
                            Редактировать
                        </button>
                    </form>
                    <Link to="/signin" onClick={onLogout} className="profile__logout">
                            Выйти из аккаунта
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Profile;