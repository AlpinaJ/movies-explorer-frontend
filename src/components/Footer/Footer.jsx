import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__date">© 2022</p>
                <div className="footer__list">
                    <a href="https://practicum.yandex.ru/" className="footer__link">
                        Яндекс.Практикум</a>
                    <a href="https://github.com/AlpinaJ" className="footer__link">Github</a>
                    <a href="#" className="footer__link">Telegram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;