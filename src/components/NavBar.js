import "./NavBar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const NavBar = () => {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [scroll,setScroll] = useState(false)
    
    const changeColor = () => {
      if (window.scrollY >= 100)
      {
        setScroll(true);
      }else
      {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", changeColor);
  return (
    <div className={scroll ? "Header Header-bg" : "Header"}>
      <Link to='/'>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/project'>Projects</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className="Hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{color:'#fff'}}/> : 
        <FaBars size={20} style={{color:'#fff'}}/>}
        
        
      </div>
    </div>
  )
}

export default NavBar;
