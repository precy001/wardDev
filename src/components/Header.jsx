import React, { useRef, useEffect } from 'react'
import '../styles/styles.css'
import logo from '../assets/logos/logo2.jpg'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import x from '../assets/icons/x.png'

const Header = () => {
  const menuBtn = useRef(null)
  const mobileMenu = useRef(null)

  useEffect(() => {
    const handleClick = () => {
      menuBtn.current.classList.toggle('is-active')
      mobileMenu.current.classList.toggle('is-active')
    }

    const btn = menuBtn.current
    const navButtons = mobileMenu.current.querySelectorAll('button')

    btn?.addEventListener('click', handleClick)
    navButtons.forEach(button => button.addEventListener('click', handleClick))

    // Cleanup
    return () => {
      btn?.removeEventListener('click', handleClick)
      navButtons.forEach(button => button.removeEventListener('click', handleClick))
    }
  }, [])

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} width={80} alt="Logo" />
        </div>

        <button className="hamburger" ref={menuBtn}>
          <div className="bar"></div>
        </button>

        <div className="mobile-nav" ref={mobileMenu}>
          <button><a href="">Home</a></button>
          <button><a href="#about">About Us</a></button>
          <button><a href="#theteam">The team</a></button>
          <button><a href="#projects">Projects</a></button>
          <button><a href="#contact">Contact Us</a></button>
        </div>

        <div className="navigation">
          <a href="">Home</a>
          <a href="#about">About Us</a>
          <a href="#theteam">The team</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="socials">
          <img src={facebook} width={30} alt="Facebook" />
          <img src={instagram} width={30} alt="Instagram" />
          <img src={x} width={30} alt="X" />
        </div>
      </div>
    </div>
  )
}

export default Header
