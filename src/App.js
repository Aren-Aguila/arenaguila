import React, { useState } from "react";
import SideNav from "./sideNav";
import Portfolio from "./portfolio";
import {motion} from "motion/react";
import ArenImg from './Aren.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import "./App.css";

document.body.style.backgroundColor = "#2b2118";
function App() {
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
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.25 },
          }}
          >
          <motion.div
            initial = {{opacity: 0, rotate: 20}}
            animate = {{opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
          }}
          >
              <FontAwesomeIcon icon={faHandPeace}/>
          </motion.div>
           Hi, I'm Aren Aguila
          <p style={{fontSize:"0.4em"}}>
            I'm a front-end web developer and UI/UX designer
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.9, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
              delay: 0.5,
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.25 },
          }}
          >
            <img src={ArenImg} alt="ArenImg" className="arenImg"></img>            
          </motion.div>
      </div>
      {/* Portfolio Segment*/}
        <Portfolio/>
    </div>
  );
}

export default App;

