import React from "react";
import Html from "./htmlicon.png";
import Css from "./cssicon.png";
import Js from "./jsicon.png";
import Reacticon from "./reacticon.png";
import "./about.css";

function About() {
    return (
        <div className="aboutContainer">
            <div className="title" style={{ textAlign: "center" }}>About Me</div>
            
            <div className="infoBox">
                {/* Skills Icons */}
                <div className="logos">
                    <img className="icon" src={Html} alt="HTML logo" />
                    <img className="icon" src={Css} alt="CSS logo" />
                    <img className="icon" src={Js} alt="JavaScript logo" />
                    <img className="icon" src={Reacticon} alt="React logo" />
                </div>

                {/* Bio Section */}
                <div className="aboutText" style={{ width: "60%" }}>
                    <p className="aboutPara">
                        Nice to meet you! I am a recent graduate from the University of California, Merced, where I received my Bachelor's degree in Computer Science & Engineering.
                    </p>
                    <p className="aboutPara">
                        I am skilled in JavaScript, React, HTML/CSS, C++, and Python.
                    </p>
                </div>

                {/* Get in Touch Section */}
                <div className="contactSection">
                    {/* Notice we use a <div> here with the .aboutPara class so it can hold the links inside the green box */}
                    <div className="aboutPara" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                        <span style={{ margin: 0 }}>Let's get in touch!</span>
                        <div className="contactLinks">
                            <a 
                                href="https://www.linkedin.com/in/aren-aguila-454072197/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="https://github.com/Aren-Aguila" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >
                                GitHub
                            </a>
                            <a 
                                href="mailto:arenaguila02@gmail.com" 
                            >
                                arenaguila02@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;