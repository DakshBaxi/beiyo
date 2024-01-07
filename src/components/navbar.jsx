import React from 'react'
import logo from '/images/beiyo_logo2.svg'
import "../styles/nav.css"
function navbar() {
  return (
  <div className="nav">
                <img src={logo} alt=""/>
                <ul>
                <a href="">  <li><p>Hostel</p></li></a>
                <a href="">  <li><p>List Property</p></li></a>
                <a href="">  <li><p>Join Our Waitlist</p></li></a>
                </ul>
  </div>
  )
}

export default navbar