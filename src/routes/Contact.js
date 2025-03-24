import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import HeroSection2 from '../components/HeroSection2';
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroSection2 heading="CONTACT." text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
