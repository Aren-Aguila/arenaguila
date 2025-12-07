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
      className="sidenav"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
    >
      <button onClick={closeNav} className="close-btn">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <motion.button 
      onClick={() => scrollToSection("intro")} 
      className="navElem"
      whileHover={{
        scale: 1.2,
        rotate: 0,
        transition: { duration: 0.5, type: "spring", bounce: 0.5 },
        cursor: "pointer",
    }}
      whileTap={{ scale: 1.1 }}
      >
        Who
      </motion.button>
      <motion.button 
      onClick={() => scrollToSection("port")} 
      className="navElem"
      whileHover={{
        scale: 1.2,
        rotate: 0,
        transition: { duration: 0.5, type: "spring", bounce: 0.5 },
        cursor: "pointer",
      }}>
      Portfolio
      </motion.button>
      <motion.button 
      onClick={() => scrollToSection("about")} 
      className="navElem"
      whileHover={{
        scale: 1.2,
        rotate: 0,
        transition: { duration: 0.5, type: "spring", bounce: 0.5 },
        cursor: "pointer",
      }}>
      About
      </motion.button>
    </motion.div>
  );
};

export default SideNav;
