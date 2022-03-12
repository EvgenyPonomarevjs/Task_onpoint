import React from "react"
import s from './Header.module.css'
import HomeBtn from './HomeBtn.png'



function Header() {
    return (
        <div className={s.wrap}>
            <img src={HomeBtn} alt="Home" />
        </div>
    );
}

export default Header
