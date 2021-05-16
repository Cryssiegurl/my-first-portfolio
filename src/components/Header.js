import React from 'react'
import './Header.css'
import Card4 from './Card2'

export default function Header() {
    return (
        <div className="Header">
            <header>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon class="svg--sm" fill="rgba(255, 255, 255, 0.4)" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
                <polygon class="svg--lg" fill="rgba(255, 255, 255, 0.4)" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
             </svg>
             </header>
             <Card4 pic="Card4 LogoPic"/>
            
        </div>
    )
}
