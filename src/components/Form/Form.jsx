import React from "react";
import "./Form.css";
import logoPath from "../../images/form__logo.svg";
import {Link} from "react-router-dom";

function Form({heading, inputs, button, span, isRegister}) {
    return (
        <section className="form__container">
            <Link to="/">
                <img className="form__logo" src={logoPath}/>
            </Link>
            <h1 className="form__heading">{heading}</h1>
            <form className="form__form">
                <div className="form__inputs">{inputs}</div>
                <button type="submit" className="form__button">{button}</button>
            </form>
            <span className="form__span">{span}
                {isRegister ? (
                    <Link to="/signin" className="form__link">Войти</Link>
                ):
                    (<Link to="/signup"  className="form__link">Регистрация</Link>)}
            </span>
        </section>
    )
}

export default Form;