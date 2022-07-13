import React from "react";
import "./Form.css";
import logoPath from "../../images/form__logo.svg";

function Form({heading, inputs, button, span, isRegister}) {
    return (
        <div className="form__container">
            <img className="form__logo" src={logoPath}/>
            <h1 className="form__heading">{heading}</h1>
            <form className="form__form">
                <div className="form__inputs">{inputs}</div>
                <button type="submit" className="form__button">{button}</button>
            </form>
            <span className="form__span">{span}
                {isRegister ? (
                    <a href="#" className="form__link">Войти</a>
                ):
                    (<a href="#" className="form__link">Регистрация</a>)}
            </span>
        </div>
    )
}

export default Form;