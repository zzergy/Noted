import React from "react";
import "./Footer.css"
import githubIcon from '../../assets/img/github-icon.svg'
function Footer() {
    return (
        <div className="footer-container">
            <img src={githubIcon} alt="github" />
            <a href="https://github.com/zzergy">Zergy</a>
        </div>
    )
}

export default Footer