import React from "react";
import s from "./Box3.module.css"

function Box3 () {
    return(
        <div className={s.content}>
            <div><img src="../../img/bakti.png" alt="" /></div>
            <div>
                <p>Ключевое сообщение</p>
                <p>BREND <span>XY</span></p>
            </div>
        </div>
    );
}
export default Box3;