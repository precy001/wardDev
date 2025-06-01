import React from 'react'
import '../styles/styles.css'
import logo from '../assets/logos/logo2.jpg'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import x from '../assets/icons/x.png'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
            <img src= {logo} width={80}/>
        </div>

        <div className="navigation">
            <a href="">Home</a>
            <a href="#about">About Us</a>
            <a href="#theteam">The team</a>
            <a href="#projects">Projects</a>
            <a href="">Contact Us</a>
        </div>

        <div className="socials">
            <img src={facebook} width={30} />
            <img src={instagram} width={30} />
            <img src={x} width={30} />
        </div>
      </div>
    </div>
  )
}

export default Header
