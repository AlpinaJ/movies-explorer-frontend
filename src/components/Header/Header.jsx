import React from "react";
import "./Header.css";
import "../Navigation/Navigation";
import logoPath from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';

function Header({loggedIn, isColor, isMain, isMovies, isSavedMovies}) {
    return (
        <header className={isColor ? ("header header_colored") : ("header")}>
            <Link to="/">
                <img src={logoPath} className="header__logo" alt="Лого"/>
            </Link>
            {loggedIn ? (
                <Navigation
                    isColor={isColor}
                    isMain={isMain}
                    isMovies={isMovies}
                    isSavedMovies={isSavedMovies}
                />
            ) : (
                <nav className="header__links">
                    <Link to="/signup" className="header__link">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__link">
                        <button className="header__button">Войти</button>
                    </Link>
                </nav>
            )}
        </header>
    )
}

export default Header;