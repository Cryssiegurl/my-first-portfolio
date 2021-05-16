import React from 'react'
import './Hire.css'
import Card3 from './Card3'

export default function Hire() {

  function notificationSent() {
    alert('Crystal has been notified!');
  }
  return (
    
        <div className="Hire">
          <h1>CONNECT WITH ME</h1> 
          <Card3 pic="Card3 InstagramPic"/>
          <Card3 pic="Card3 GithubPic"/>
          <Card3 pic="Card3 EmailPic"/>
          <Card3 pic="Card3 ResumePic"/>
          <div class="hiremeBttn">
          <button onClick={notificationSent}>Hire Me!</button>
          </div>
        </div>
      
    )
}