import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SideNav = ({ isOpen, closeNav }) => {
  return (
    <motion.div
      id="side-navigation"
      className="sidenav"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
      aria-label="Main navigation"
    >
      <button type="button" onClick={closeNav} className="close-btn" aria-label="Close navigation menu">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <motion.button 
        type="button"
        onClick={() => scrollToSection("intro")} 
        className="navElem"
        aria-label="Go to introduction"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Who
      </motion.button>
      <motion.button 
        type="button"
        onClick={() => scrollToSection("port")} 
        className="navElem"
        aria-label="Go to portfolio"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Portfolio
      </motion.button>
      <motion.button 
        type="button"
        onClick={() => scrollToSection("about")} 
        className="navElem"
        aria-label="Go to about section"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.98 }}
      >
        About
      </motion.button>
    </motion.div>
  );
};

export default SideNav;
