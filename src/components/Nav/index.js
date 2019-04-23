import React from "react";
import "./style.css";

function Nav(props) {
    
    return(
    
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">
                        Click of the Hill
                    </a>
                </li>
                <li>
                    Click a picture to begin!
                </li>
                <li>
                    Score: {props.currentScore} | High Score: {props.highScore}
                </li>
            </ul>
        </nav>
    )
}


export default Nav;