import React, { useState, useEffect } from "react";
import SideNav from "./sideNav";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";
import {motion} from "motion/react";
import ArenImg from './ArenFilter.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import Noise from "./nnnoise.svg";
import "./App.css";


function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${Noise})`;
    document.body.style.backgroundSize = "cover"; // Optional: Adjust background size
    document.body.style.backgroundRepeat = "no-repeat"; // Prevent repetition
  }, []); // Runs once when the component mounts
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />
      {/* Introduction Segment */}
      <div className="hiContainer">
        <motion.div 
          style={{textAlign: "left"}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 0.7,
              scale: { type: "spring", visualDuration: 1 },
          }}
          >
          <motion.div
          className="peace"
          style={{color: "#A8763E", backgroundColor: "transparent"}}
            initial = {{opacity: 0, rotate: -20}}
            animate = {{opacity: 1, rotate: 0}}
            transition={{
              duration: 0.5,
              scale: { type: "tween", visualDuration: 0.5, bounce: 1 },
            }}
          >
              <FontAwesomeIcon icon={faHandPeace}/>
          </motion.div>
           Hi, I'm Aren Aguila
          <p style={{fontSize:"0.4em", backgroundColor: "transparent"}}>
          I'm a front-end web developer and UI/UX designer, specialising in innovative design and accessibility
          </p>
        </motion.div>
            <img src={ArenImg} alt="ArenImg" className="arenImg"></img>            
      </div>
      {/* Portfolio Segment*/}
        <Portfolio/>
      {/* About Me Segment */}
        <About/>
      {/* Contact Me Segment */}
        <Contact />
    </div>
  );
}

export default App;

