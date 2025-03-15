import React, { useState } from "react";
import SideNav from "./sideNav";
import {motion} from "motion/react";
import "./App.css";
import ArenImg from './Aren.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";

document.body.style.backgroundColor = "#2b2118";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />
      <div className="hiContainer">
        <motion.div 
          style={{textAlign: "left"}}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.25 },
          }}
          >
          Hi, I'm Aren Aguila
          <p style={{fontSize:"0.4em"}}>
            I'm a front-end web developer
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          >
            <img src={ArenImg} alt="ArenImg"></img>            
          </motion.div>
      </div>
    </div>
  );
}

export default App;

