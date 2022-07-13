import React from "react";
import "./AboutMe.css";
import profilePath from "../../images/profile.jpg";

function AboutMe(){
    return(
        <section className="about-me">
            <div className="about-me__header">Студент</div>
            <div className="about-me__profile">
                <div className="about-me__description">
                    <h2 className="about-me__title">Юлия</h2>
                    <h3 className="about-me__subtitle">Фронтенд-разработчик, 21 год</h3>
                    <p className="about-me__text">В университете я училась на треке Data Science.
                        Но на одном из курсов мне нужно было сделать несложное web приложение.
                        Тогда я поняла, что frontend разработка мне нравится намного больше.
                        Мне приносит огромное удовольствие - видеть, как моими усилиями интерфейс
                        становится красивым и удобным для пользователя. В свободное время люблю
                        кататься на велосипеде, а также занимаюсь большим теннисом.</p>
                    <ul className="about-me__links">
                        <li className="about-me__link">
                            <a href="https://t.me/AlpinaJ"
                               target="_blank">
                                Telegram
                            </a>
                        </li>
                        <li className="about-me__link">
                            <a href="https://github.com/AlpinaJ"
                               target="_blank">
                                Github
                            </a>
                        </li>

                    </ul>
                </div>
                <img src={profilePath} className="about-me__photo" alt="Мое фото"/>
            </div>
        </section>
    )
}

export default AboutMe;