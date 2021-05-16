import React from 'react'
import './CardText.css'

function CardText(props) {
    return (
        <p className="CardText">
            {props.desc}
        </p>
    )
}

export default CardText;