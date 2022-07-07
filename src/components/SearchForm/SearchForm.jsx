import React from "react";
import Checkbox from "../Checkbox/Chekbox";
import "./SearchForm.css";
import findImagePath from "../../images/find.svg";

function SearchForm(){
    return(
        <div className="search-form">
            <form className="search-form__form">
                <div className="search-form__line">
                    <input type="search"
                           placeholder="Фильм"
                           className="search-form__input"
                           required
                    />
                    <button type="submit" value=" " className="search-form__submit">
                        <img  src={findImagePath} className="search-form__image" alt="Поиск"/>
                    </button>
                </div>
                <Checkbox/>
            </form>

            <div className="search__checkbox">

            </div>
        </div>
    )
}

export default SearchForm;