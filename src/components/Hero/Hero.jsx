import "./HeroStyle.css";
import introImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

import React from "react";

const Hero = () => {
  return <div className="hero">
    <div className="mask">
        <img className="intro-img" src={introImg} alt="Intro Image" />
    </div>
    <div className="content">
        <p>HI, I'M A FREElANCER.</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-ligth">CONTACT</Link>
        </div>
    </div>
  </div>
};

export default Hero;
