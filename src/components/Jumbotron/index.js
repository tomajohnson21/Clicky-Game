import React, {Component} from 'react';

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Clicky Game</h1>
                <p>Click pictures to score a point, but don't click the same picture twice</p>
            </div>
        )
    }
}

export default Jumbotron;