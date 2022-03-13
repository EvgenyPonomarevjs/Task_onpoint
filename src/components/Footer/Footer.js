import React from "react";
import logo from '../../img/shape.png'
import s from  "./Footer.module.css"

function Footer () {
    return(
        <div className={s.logo}><img src={logo} alt="Logo" /></div>
    )
}
export default Footer