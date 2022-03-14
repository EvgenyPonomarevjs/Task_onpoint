import React from "react"
import s from './Header.module.css'
import HomeBtn from '../../img/HomeBtn.png'


function Header() {
    function btnHome () {
        
    }
    return (
        <div className={s.wrap}>
            <img src={HomeBtn} alt="Home" className={s.btnHome} onClick={btnHome}/>
        </div>
    );
}

export default Header
