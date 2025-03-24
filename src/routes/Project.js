import React from 'react'
import NavBar from "../components/NavBar";
import HeroSection2 from '../components/HeroSection2';
import Work from '../components/Work';
import PricingCard from '../components/PricingCard';
import Footer from "../components/Footer"

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroSection2  heading="PROJECTS." text="Some Of My Last Recent Works" />
      <Work/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
