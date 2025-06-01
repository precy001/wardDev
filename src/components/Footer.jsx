import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer" id='contact'>
      <div className="footer-content">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <strong>Website:</strong>{' '}
            <a href="https://nigerstate.gov.ng" target="_blank" rel="noopener noreferrer">
              Official Niger State Government Website
            </a>
          </li>
          <li>
            <strong>Governor Bago’s Social Media:</strong>{' '}
            <a href="https://twitter.com/HonBago" target="_blank" rel="noopener noreferrer">
              Twitter/X: @HonBago
            </a>
          </li>
          <li>
            <strong>News:</strong> Available on platforms like <em>Legit.ng</em>, <em>Daily Trust</em>, <em>The Nation</em>.
          </li>
          <li>
            <strong>Phone Number:</strong> 
          </li>
          <li>
            <strong>Address:</strong> 
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Niger State Ward Development Project. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
