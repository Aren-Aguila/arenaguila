import React from "react";
import Html from "./htmlicon.png";
import Css from "./cssicon.png";
import Js from "./jsicon.png";
import Reacticon from "./reacticon.png";
import "./about.css";

function about() {
    return (
        <div className="aboutContainer">
            <div className="title" style={{textAlign: "center"}}>About Me</div>
            <div className="infoBox">
                <div className="logos">
                        <img className="icon" src={Html} alt="htmllogo"></img>
                        <img className="icon" src={Css} alt="csslogo"></img>
                        <img className="icon" src={Js} alt="jslogo"></img>
                        <img className="icon" src={Reacticon} alt="reactlogo"></img>
                </div>
                <p className="aboutPara">
                    Nice to meet you!
                    I am an upcoming student at the University of California, Merced where I am studying Computer Science & Engineering.
                    I am skilled in Javascript, REACT, HTML/CSS, C++ and Python
                </p>
                <p className="aboutPara">
                    Let's get in touch!
                    <a href="https://www.linkedin.com/in/aren-aguila-454072197/"> Linkedin </a>
                    arenaguila02@gmail.com
                </p>
            </div>
        </div>
    );
}

export default about;
