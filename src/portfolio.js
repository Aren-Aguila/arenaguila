import React from "react";
import { motion } from "framer-motion";
import Swf from "./swfFilter.jpg";
import Vista from "./vistaFilter.jpg";
import F3 from "./f3Filter.jpg";
import Shopify from "./shopifylogo.png";
import "./portfolio.css";
import "./App.css";

// 1. Create a data array to easily manage your projects
const projects = [
  { id: 1, title: "SWF", image: Swf, link: "https://securewaterfuture.net/" },
  { id: 2, title: "VISTA", image: Vista, link: "https://vista.ucmerced.edu/" },
  { id: 3, title: "F3", image: F3, link: "https://vista.ucmerced.edu/f3/" },
  { id: 4, title: "Shopify Storefront", image: Shopify, link: "https://myogoblin-2.myshopify.com/" },
  // Setting up an array makes it incredibly easy to add your other work later:
  // { id: 4, title: "UNIFOODI", image: UnifoodiImg, link: "..." },
  // { id: 5, title: "Myogoblin Shopify", image: MyogoblinImg, link: "..." },
];

// 2. PascalCase for React components
function Portfolio() {
  return (
    <div className="portfolioBody">
      <div className="title" style={{ textAlign: "center" }}>My Work</div>
      
      <motion.div className="cardContainer">
        {/* 3. Map through the data to generate cards dynamically */}
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer" // Security best practice for external links
            className="card"
            style={{ textDecoration: "none", color: "inherit" }} 
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, type: "spring", bounce: 0.3 },
            }}
            whileTap={{ scale: 1.025 }}
          >
            <img src={project.image} alt={`${project.title} preview`} className="cardimg" />
            {project.title}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;