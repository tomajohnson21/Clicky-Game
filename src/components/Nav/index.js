import React, { Component } from "react";

class Nav extends Component {
    render(props) {
        return(
        
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Clicky Game
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
}

export default Nav;