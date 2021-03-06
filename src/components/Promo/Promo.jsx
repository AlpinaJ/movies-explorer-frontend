import React from "react";
import "./Promo.css";
import promoPath from "../../images/promo.svg";

function Promo(){
    return(
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title"> Учебный проект студента факультета
                Веб-разработки. </h1>
                <p className="promo__text"> Листайте ниже, чтобы узнать больше про
                    этот проект и его создателя.</p>
                <a href="#about-project" className="promo__button"> Узнать больше</a>
            </div>
            <img className="promo__image" src={promoPath} alt="Планета"/>
        </section>
    )
}

export default Promo;