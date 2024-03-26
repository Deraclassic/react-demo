import React from 'react'
import Luxe from "../../images/Luxe (1).png"
import menu from "../../images/Menu.png"
import "./Header.css"

const Header = () => {
  return (
    <nav className='navigation-bar'>
        <div className='nav-logo'>
            <img src={Luxe} alt='logo' />
        </div>
        <div className='options'>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>How we work</li>
        </ul>
        </div>
        <div className='menu'>
            <img src={menu} alt='Ham' />
        </div>
    </nav>
  )
}

export default Header;
