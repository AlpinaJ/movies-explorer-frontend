import Form from "../Form/Form";
import "./Register.css";
import React from "react";

function Register() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <section className="register">
            <Form
                heading={"Добро пожаловать!"}
                inputs={
                    <div className="register__inputs">
                        <label className="register__label">Имя</label>
                        <input
                            className="register__input"
                            type="text"
                            name="name"
                            id="name"
                            minLength="2"
                            maxLength="40"
                            required
                            value={name || ""}
                            onChange={handleChangeName}
                        />
                        <label className="register__label">E-mail</label>
                        <input
                            className="register__input"
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email || ""}
                            onChange={handleChangeEmail}
                        />
                        <label className="register__label">Пароль</label>
                        <input
                            className="register__input"
                            type="password"
                            name="password"
                            id="password"
                            minLength="8"
                            required
                            value={password || ""}
                            onChange={handleChangePassword}
                        />
                    </div>
                }
                button={"Зарегистрироваться"}
                span={"Уже зарегистрированы?"}
                isRegister={true}
            />
        </section>
    )
}

export default Register;