import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const SideNav = ({ isOpen, closeNav }) => {
  return (
    <motion.div
      className="sidenav"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut", type: "spring" }}
    >
      <button onClick={closeNav} className="close-btn">
        <FontAwesomeIcon icon={faTimes}/>
      </button>
      <a href="#section" className="navElem">Who am I?</a>
      <a href="#section" className="navElem">What am I?</a>
      <a href="#section" className="navElem">Where am I?</a>
      <a href="#section" className="navElem">Why am I?</a>
    </motion.div>
  );
};

export default SideNav;
