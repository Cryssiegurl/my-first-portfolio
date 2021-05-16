import React from 'react'
import './Card.css'
import CardTitle from './CardTitle'
import CardText from './CardText'

function Card(props) {
    return (
        <div className={props.pic}>
            <CardText desc={props.desc} />
            <CardTitle text={props.text} />
        </div>
    )
}

export default Card;