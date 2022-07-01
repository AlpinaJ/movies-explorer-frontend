import "./Techs.css";

function Techs(){
    return(
        <div className="techs">
            <div className="techs__header">Технологии</div>
            <div className="techs__items">
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.</p>
                <ul className="techs__list">
                    <li className="techs__list-item">HTML</li>
                    <li className="techs__list-item">CSS</li>
                    <li className="techs__list-item">JS</li>
                    <li className="techs__list-item">React</li>
                    <li className="techs__list-item">Git</li>
                    <li className="techs__list-item">Express.js</li>
                    <li className="techs__list-item">mongoDB</li>
                </ul>
            </div>
        </div>
    )
}

export default Techs;