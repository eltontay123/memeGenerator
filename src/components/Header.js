import React from 'react'
import '../styles/header.css'
import Logo from '../images/trollface.png'

export default function Header() {
  return (
    <nav className='header'>
        <div className='logo'>
            <img className='logo-img' src={Logo} alt='troll face'/>
            <h1 className='logo-text'>Meme Generator</h1>
        </div>
        <div className='header-title'>React Course Project 4</div>
    </nav>
  )
}
