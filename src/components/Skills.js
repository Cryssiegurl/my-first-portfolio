import React from 'react'
import './Skills.css'
import Card from './Card'

export default function Skills() {
    return (
        <div className="Skills">
          <Card text="HTML/CSS/JS" pic="Card Pic1"/> 
          <Card text="JAVA" pic="Card Pic2"/>  
          <Card text="DESIGN" pic="Card Pic3"/>
          <div id='myskills'>
          <h2>As an upcoming Web Developer & Designer, I enjoy all aspects of building and creating 
           websites from the ground up.</h2>
          <h2> My skills include the basics of Html, CSS and Javascript, 
          as well as Java and Design aspects of the web.</h2>
        </div>
        </div>
    )
}