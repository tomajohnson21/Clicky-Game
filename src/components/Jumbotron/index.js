import React, {Component} from 'react';
import './style.css';

class Jumbotron extends Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Click of the Hill</h1>
                <p>Click pictures to score a point, but don't click the same picture twice</p>
            </div>
        )
    }
}

export default Jumbotron;