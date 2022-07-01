import "./AboutProject.css";

function AboutProject() {
    return (
        <div className="about-project">
            <div className="about-project__header"> О проекте</div>
            <div className="about-project__items">
                <div className="about-project__item">
                    <h2 className="about-project__title">Дипломный проект включал 5 этапов</h2>
                    <p className="about-project__text">Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__item">
                    <h2 className="about-project__title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__progressbar">
                <p className="about-project__progressbar-text about-project__progressbar-text_background_black">1 неделя</p>
                <p className="about-project__progressbar-text about-project__progressbar-text_background_gray">4 недели</p>
                <p className="about-project__progressbar-text">Back-end</p>
                <p className="about-project__progressbar-text">Front-end</p>

            </div>
        </div>
    )
}

export default AboutProject;