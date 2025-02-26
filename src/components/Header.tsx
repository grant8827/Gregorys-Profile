import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Mobile_Responsive from './Mobile_Responsive'
function Header() {
  return (
    <div className='header'>
      <h1 className='headertitle'>MY PORTFOLIO</h1>

      <nav className='navBar'>

        <ul className='navList'>

          <li><Link to="/">Home</Link></li>

        <span style={{color:'var(--primaryColor)'}}>|</span>

          <li><Link to="/resume">Resume</Link></li>

          <span style={{color: 'var(--primaryColor)'}}>|</span>

          <li><Link to="/coverletter">Cover Letter</Link></li>

          
        </ul>
        <div className='mobileResponsive'>
        < Mobile_Responsive />
        </div>
      </nav>
    </div>
  )
}

export default Header