import React from "react";
import "./Form.css";
import logoPath from "../../images/form__logo.svg";
import {Link} from "react-router-dom";

function Form({heading, inputs, button, span, isRegister, onSubmit, isValid}) {
    return (
        <section className="form__container">
            <Link to="/" className="form__logo">
                <img src={logoPath}/>
            </Link>
            <h1 className="form__heading">{heading}</h1>
            <form className="form__form" onSubmit={onSubmit}>
                <div className="form__inputs">{inputs}</div>
                <button type="submit" className={isValid?("form__button"):
                    ("form__button form__button_disabled")}>{button}</button>
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