import React from "react";
import "./Navigation.css";
import accountPath from "../../images/account.svg";
import burgerPath from "../../images/burger.svg";
import closePath from "../../images/close.svg";

function Navigation({isColor}) {
    const isMobile = window.screen.width <= 768;
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
                                <div className="burger__open">
                                    <div className="burger__overlay"></div>
                                    <button onClick={handleCloseBurger}
                                            className="burger__close-button">
                                    </button>
                                    <a href="#" className="navigation__link navigation__link_burger navigation__link_active">
                                        Главная </a>
                                    <a href="#" className="navigation__link navigation__link_burger">
                                        Фильмы </a>
                                    <a href="#" className="navigation__link navigation__link_burger">
                                        Сохраненные фильмы </a>
                                    <img src={accountPath} alt="Аккаунт" className="navigation__button navigation__button_burger"/>
                                </div>
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
                        <div className="navigation">
                            <a href="#" className="navigation__link"> Фильмы </a>
                            <a href="#" className="navigation__link"> Сохраненные фильмы </a>
                            <img src={accountPath} alt="Аккаунт" className="navigation__button"/>
                        </div>
                    )
            }
        </>)
}

export default Navigation;