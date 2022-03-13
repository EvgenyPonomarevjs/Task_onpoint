import React from "react";
import s from "./Box1.module.css"

function Box1 () {
    function btnClick () {
        console.log("click")
    }
    return(
        <div className={s.content}>
            <div className={s.contentText}>Привет,</div>
            <div className={s.contentTextItem1}>Это 
            <span className={s.contentTextItem2}> не</span> <br/> коммерческое задание 
            <button className={s.contentBtn} onClick={btnClick}></button>
            </div>
        </div>
    );
}
export default Box1;