import React, { useState, useEffect } from "react";
import SideNav from "./sideNav";
import Portfolio from "./portfolio";
import About from "./about";
import Intro from "./intro";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Lenis from "lenis";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Scroll to top on mount
    window.scrollTo(0, 0);

    // 2. Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 3. Cleanup function to prevent memory leaks
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <motion.button 
        className="open-btn" 
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
        whileHover={{
          color: "#058ED9",
          transition: { duration: 0.2, type: "spring" },
        }}
      >
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5em", color: "#361F1C" }} />
      </motion.button>
      
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />

      {/* Intro Segment */}
      <div id="intro"><Intro /></div>

      {/* Portfolio Segment */}
      <div id="port"><Portfolio /></div>

      {/* About Me Segment */}
      <div id="about"><About /></div>
    </div>
  );
}

export default App;