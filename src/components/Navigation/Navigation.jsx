import "./Navigation.css";
import accountPath from "../../images/account.svg";

function Navigation(){
    return(
        <div className="navigation">
            <a href="#" className="navigation__link"> Фильмы </a>
            <a href="#" className="navigation__link"> Сохраненные фильмы </a>
            <img src={accountPath} alt="Аккаунт" className="navigation__button"/>
        </div>
    )
}

export default Navigation;