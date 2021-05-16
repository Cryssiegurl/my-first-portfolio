import React from 'react'
import './CardTitle.css'

function CardTitle(props) {
    return (
        <h1 className="CardTitle">
            {props.text}
        </h1>
    )
}

export default CardTitle;