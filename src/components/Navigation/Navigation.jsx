import React from "react";
import "./Navigation.css";
import accountPath from "../../images/account.svg";
import burgerPath from "../../images/burger.svg";
import closePath from "../../images/close.svg";
import {Link, NavLink} from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

function Navigation({isColor}) {
    const isMobile = useMediaPredicate("(max-width: 768px)");
    const [isBurgerOpen, SetBurgerOpen] = React.useState(false);

    function handleOpenBurger() {
        SetBurgerOpen(true);
    }

    function handleCloseBurger() {
        SetBurgerOpen(false);
    }

    return (
        <>
            {
                isMobile ?
                    (
                        isBurgerOpen ?
                            (
                                <nav className="burger__open">
                                    <div className="burger__overlay"></div>
                                    <button onClick={handleCloseBurger}
                                            className="burger__close-button">
                                    </button>
                                    <Link to="/" className="navigation__link navigation__link_burger navigation__link_active">
                                        Главная </Link>
                                    <Link to="/movies" className="navigation__link navigation__link_burger">
                                        Фильмы </Link>
                                    <Link to="/saved-movies" className="navigation__link navigation__link_burger">
                                        Сохраненные фильмы </Link>
                                    <Link to="/profile" className="navigation__account-link">
                                        <img src={accountPath} alt="Аккаунт" className="navigation__button navigation__button_burger"/>
                                    </Link>

                                </nav>
                            ) :
                            (
                                <>
                                    <button onClick={handleOpenBurger}
                                            className={isColor ? ("burger__button burger__button_colored") : ("burger__button")}>
                                        < img src={burgerPath} alt="Меню"/>
                                    </button>
                                </>
                            )
                    ) :
                    (
                        <nav className="navigation">
                            <Link to="/movies" className="navigation__link"> Фильмы </Link>
                            <Link to="/saved-movies" className="navigation__link"> Сохраненные фильмы </Link>
                            <Link to="/profile" className="navigation__account-link">
                                <img src={accountPath} alt="Аккаунт" className="navigation__button"/>
                            </Link>
                        </nav>
                    )
            }
        </>)
}

export default Navigation;