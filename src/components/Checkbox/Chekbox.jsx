import React from "react";
import "./Checkbox.css";

function Checkbox({checked, onChange}){
    const [isShort,setIsShort] = React.useState(checked);

    function handleChange(){
        const background = document.querySelector(".checkbox__checkmark-background");
        const checker = document.querySelector(".checkbox__checkmark-checker");
        background.classList.toggle("checkbox__checkmark-background_disable");
        checker.classList.toggle("checkbox__checkmark-checker_disable");
        onChange(!checked);
    }
    return(
        <div className="checkbox__container">
            <label className="checkbox__label">
                <input type="checkbox" checked={checked} onChange={handleChange} className="checkbox__default"/>
                <div className="checkbox__checkmark">
                    <div className="checkbox__checkmark-background"></div>
                    <div className="checkbox__checkmark-checker"></div>
                </div>
            </label>
            <span className="checkbox__option">Короткометражки</span>
        </div>
    )
}

export default Checkbox;