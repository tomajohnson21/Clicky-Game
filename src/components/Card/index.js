import React from 'react';

function Card(props) {

    return (
        <div className="col-4">
            <div className="card">
                <img className="card-image" src={props.src} alt={props.name} onClick={() => props.handleCardClick(props.id)}/>
            </div>
        </div>
    )
}

export default Card;