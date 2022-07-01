import "./Promo.css";
import promoPath from "../../images/promo.svg";

function Promo(){
    return(
        <div className="promo">
            <div className="promo__container">
                <h1 className="promo__title"> Учебный проект студента факультета
                    Веб-разработки. </h1>
                <p className="promo__text"> Листайте ниже, чтобы узнать больше про
                    этот проект и его создателя.</p>
                <button className="promo__button"> Узнать больше</button>
            </div>
            <img className="promo__image" src={promoPath}/>
        </div>
    )
}

export default Promo;