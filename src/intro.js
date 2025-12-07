import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import {motion} from "motion/react";
import "./App.css";

function intro() {
    return(
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
          style={{color: "#058ED9", backgroundColor: "transparent"}}
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
              Hi, I'm Aren Aguila.
              <p style={{fontSize:"0.4em", backgroundColor: "transparent"}}>
                  I'm a full-stack web developer and UI/UX designer. <br></br>
                  Feel free to check out some of my work and get to know me!
              </p>
          </div>
        </motion.div>
      </div>
    );
}

export default intro;