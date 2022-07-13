import Form from "../Form/Form";
import "./Login.css";
import React from "react";

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }


    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <section className="login">
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
            />
        </section>
    )
}

export default Login;