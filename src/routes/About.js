import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import HeroSection2 from '../components/HeroSection2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroSection2 heading="ABOUT US" text="I'm a Front-End Developer"/>
      <AboutContent />
      <Footer />      
    </div>
  )
}

export default About;
