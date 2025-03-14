import React, { useState } from "react";
import SideNav from "./sideNav";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

document.body.style.backgroundColor = "#2b2118";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <SideNav isOpen={isOpen} closeNav={() => setIsOpen(false)} />
    </div>
  );
}

export default App;

