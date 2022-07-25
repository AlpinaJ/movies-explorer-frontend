import React from "react";
import Checkbox from "../Checkbox/Chekbox";
import "./SearchForm.css";
import findImagePath from "../../images/find.svg";

function SearchForm({onSearch, checked, onCheckClick, initialKeyword}){
    const [keyword, setKeyword] = React.useState(initialKeyword);
    function handleKeywordChange(e){
        setKeyword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSearch(keyword);
    }

    return(
        <section className="search-form">
            <form className="search-form__form" onSubmit={handleSubmit}>
                <div className="search-form__line">
                    <input type="search"
                           placeholder="Фильм"
                           className="search-form__input"
                           onChange={handleKeywordChange}
                           value={(keyword!=="null")?(keyword):("")}
                    />
                    <button type="submit" value=" " className="search-form__submit">
                        <img  src={findImagePath} className="search-form__image" alt="Поиск"/>
                    </button>
                </div>
                <Checkbox checked={checked} onChange={onCheckClick}/>
            </form>

            <div className="search__checkbox">

            </div>
        </section>
    )
}

export default SearchForm;