import React from "react";
import s from "./Box3.module.css"
import bottle from '../../img/bottle.png'

function Box3 () {
    return(
        <div className={s.content}>
            <div><img src={bottle} alt="" /></div>
            <div>
                <div>
                    <h2 className={s.content_text}>Ключевое сообщение</h2>
                    <h3 className={s.content_text2}>BREND <span className={s.content_text_item}>XY</span></h3>
                </div>
                <div className={s.box_content}>
                    <div className={s.box_content_item1}>
                        <p className={s.box_content_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sint.</p>
                    </div>
                    <div className={s.box_content_item2}>
                        <p className={s.box_content_text2}>Lorem ipsum dolor sit amet .</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Box3;