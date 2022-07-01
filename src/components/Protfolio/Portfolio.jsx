import "./Portfolio.css";
import arrowPath from "../../images/arrow.svg";

function Portfolio(){
    return(
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <div className="portfolio__links">
                <a href="https://alpinaj.github.io/how-to-learn/"
                   className="portfolio__link">
                    <p className="portfolio__name">Статичный сайт</p>
                    <img src={arrowPath} className="portfolio__image" alt="Стрелка"/>
                </a>
                <a href="https://alpinaj.github.io/russian-travel/index.html#"
                   className="portfolio__link">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <img src={arrowPath} className="portfolio__image" alt="Стрелка"/>
                </a>
                <a href="https://mesto-julia.nomoredomains.xyz/"
                   className="portfolio__link">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <img src={arrowPath} className="portfolio__image" alt="Стрелка"/>
                </a>
            </div>
        </div>
    )
}

export default Portfolio;