import React from "react";
import { motion } from "framer-motion";
import "./about.css";

function about() {
    return (
        <div className="aboutContainer">
            <div className="title" style={{textAlign: "center"}}>About Me</div>
            <p className="aboutPara">
                Nice to meet you!
                I am an upcoming student at the University of California, Merced where I am studying Computer Science & Engineering.
                I am skilled in Javascript, REACT, HTML/CSS, C++ and Python
            </p>
        </div>
    );
}

export default about;
