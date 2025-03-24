import React from 'react'
import "./HeroSection.css"
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
const HeroSection = () => {
    return (
      <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='HeroImg'/>
        </div>
        <div className='content'>
            <p>Hi, I'm a freelancer</p>
            <h1>React Developer</h1>
            <div>
            <Link className="btn" to="/project">Project</Link>
            <Link className="btn btn-light" to="/contact">Contact</Link>
            </div>
      </div>
    </div>
    )
  }

export default HeroSection;
