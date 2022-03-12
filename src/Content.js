import React from "react";
import s from "./Content.module.css"

function Content () {
    return(
        <div className={s.content}>
            <p className={s.contentText}>Привет,</p>
            <p className={s.contentTextItem1}>Это <span className={s.contentTextItem2}>не</span> коммерческое задание</p>
        </div>
    );
}
export default Content;