import React from "react";
import "./Header.css";
import "../Navigation/Navigation";
import logoPath from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';

function Header({loggedIn, isColor}) {
    return (
        <header className={isColor ? ("header header_colored") : ("header")}>
            <Link to="/">
                <img src={logoPath} className="header__logo" alt="Лого"/>
            </Link>
            {loggedIn ? (
                <Navigation isColor={isColor}/>
            ) : (
                <ul className="header__links">
                    <li className="header__link-item">
                        <Link to="/signup" className="header__link">
                            Регистрация
                        </Link>
                    </li>
                    <li className="header__link-item">
                        <Link to="/signin" className="header__link">
                            <button className="header__button">Войти</button>
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Header;