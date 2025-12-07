import React, { useState, useEffect } from "react";
import SideNav from "./sideNav";
import Portfolio from "./portfolio";
import About from "./about";
import Intro from "./intro";
import {motion} from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Lenis from "lenis";
import "./App.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFCE8";
    document.body.style.backgroundSize = "cover"; // background size
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
          color: "#058ED9",
          transition: { duration: 0.2, type: "spring" }, // Move duration inside transition
        }}
        >
      <FontAwesomeIcon icon={faBars} style={{fontSize: "1.5em", color: "#361F1C"}} />
      </motion.button>
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />

      {/* Intro Segment */}
        <div id="intro"><Intro/></div>

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

