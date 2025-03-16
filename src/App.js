import React, { useState, useEffect } from "react";
import SideNav from "./sideNav";
import Portfolio from "./portfolio";
import About from "./about";
import Contact from "./contact";
import {motion, useScroll, useSpring, useTransform} from "motion/react";
import ArenImg from './arenFilter.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import Noise from "./nnnoise.svg";
import Lenis from "lenis";
import "./App.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${Noise})`;
    document.body.style.backgroundSize = "cover"; // background size
    document.body.style.backgroundRepeat = "no-repeat"; // Prevent repetition
  }, []); // Runs once when the component mounts
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    }, [])

  return (
    <div className="App">
      <motion.button 
        className="open-btn" 
        onClick={() => setIsOpen(true)}
        whileHover={{
          color: "#177E89",
          transition: { duration: 0.2, type: "spring" }, // Move duration inside transition
        }}
        >
      <FontAwesomeIcon icon={faBars} style={{fontSize: "1.5em"}}/>
      </motion.button>
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />
      {/* Introduction Segment */}
      <div className="hiContainer">
        <motion.div 
          style={{textAlign: "left"}}
          initial={{ opacity: 0, translateY: 150 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.6 },
          }}
          >
          <motion.div
          className="peace"
          style={{color: "#A8763E", backgroundColor: "transparent"}}
            initial = {{opacity: 0, rotate: -20}}
            animate = {{opacity: 1, rotate: 0}}
            transition={{
              duration: 0.5,
              delay: 1,
              type: "spring", 
              bounce: 0.5,
            }}
          >
              <FontAwesomeIcon icon={faHandPeace}/>
          </motion.div>
           <div className= "intro">
              Hi, I'm Aren Aguila
              <p style={{fontSize:"0.4em", backgroundColor: "transparent"}}>
                  I'm a front-end web developer and UI/UX designer, specialising in innovative design and accessibility
              </p>
          </div>
        </motion.div>
        <motion.div 
          id="who"
          initial = {{opacity: 0, rotate: 0, scale: 1.2}}
          animate = {{opacity: 1, rotate: 5, scale: 1}}
          transition={{
            duration: 0.7,
            delay: 0.5,
            scale: { type: "spring", visualDuration: 0.7, bounce: 0.6 },
          }}
        >
            <img src={ArenImg} alt="ArenImg" className="arenImg"></img>
          </motion.div>           
      </div>
      {/* Portfolio Segment*/}
        <div id="port"><Portfolio/></div>

      {/* About Me Segment */}
      <div id="about"><About/></div>

      {/* Contact Me Segment 
        <div id="contact"><Contact/> </div> */}
    </div>
  );
}

export default App;

