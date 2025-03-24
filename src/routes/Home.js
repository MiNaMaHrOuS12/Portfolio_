import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"
import Work from "../components/Work" 
const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Work />
            <Footer />
        </div>
    );
}

export default Home;