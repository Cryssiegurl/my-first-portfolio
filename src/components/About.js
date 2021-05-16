import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import './About.css'

export default function About() {
    return (
  
        <div className="About">
          <Card text="♥Crystal Heffernan♥ ♥~Web Developer~♥" pic="Card ProfilePic"/>
          <div id='abouttext'>
          <h3>I'm Crystal, an aspiring Web Developer/Designer,</h3> 
          <h3> always striving to learn and create something new.</h3>
          <h3>Currently a first year Web & Mobile Development</h3>
          <h3>student with triOS College, 2022 future graduate.</h3>
          <h3>In my spare time, I love to geocache, cook/bake, </h3>
          <h3>write short stories/poems, watch a great tv series,</h3>
          <h3>enjoy a great cup of coffee, and of course, CODE!</h3>
          </div>
          <div>
          <Card2 pic="Card2 GeocachePic"/>
          <Card2 pic="Card2 BakingPic"/>
          <Card2 pic="Card2 WritingPic"/>
          <Card2 pic="Card2 TvPic"/>
          <Card2 pic="Card2 CoffeePic"/>
          <Card2 pic="Card2 CodePic"/>
          </div>
        </div>

  
      
    )
}