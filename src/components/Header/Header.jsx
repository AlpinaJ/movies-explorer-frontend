import React from "react";
import "./Header.css";
import "../Navigation/Navigation";
import logoPath from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {Link} from 'react-router-dom';

function Header({loggedIn}) {
    return (
        <header className="header">
            <img src={logoPath} className="header__logo" alt="Лого"/>
            {loggedIn ? (
                <Navigation/>
            ) : (
                <ul className="header__links">
                    <li className="header__link-item">
                        <a href="#" className="header__link">
                            Регистрация
                        </a>
                    </li>
                    <li className="header__link-item">
                        <a href="#" className="header__link">
                            <button className="header__button">Войти</button>
                        </a>
                    </li>
                </ul>
                )}
        </header>
    )
}

export default Header;