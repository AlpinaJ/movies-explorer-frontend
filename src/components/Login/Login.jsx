import Form from "../Form/Form";
import "./Login.css";
import React from "react";
import validator from "validator";

function Login({onLogin}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isValidEmail, setIsValidEmail] = React.useState(false);
    const [isValidPassword, setIsValidPassword] = React.useState(false);

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        setIsValidEmail(e.target.validity.valid && validator.isEmail(e.target.value));
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
        setIsValidPassword(e.target.validity.valid);
    }

    function handleSubmit(e){
        e.preventDefault();
        onLogin({email,password});
    }

    return (
        <main className="login">
            <Form
                heading={"Рады видеть!"}
                inputs={
                    <div className="login__inputs">
                        <label className="login__label">E-mail</label>
                        <input
                            className="login__input"
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email || ""}
                            onChange={handleChangeEmail}
                        />
                        <label className="login__label">Пароль</label>
                        <input
                            className="login__input"
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
                button={"Войти"}
                span={"Ещё не зарегистрированы?"}
                isRegister={false}
                onSubmit={handleSubmit}
                isValid={isValidEmail && isValidPassword}
            />
        </main>
    )
}

export default Login;