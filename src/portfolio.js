import React from "react";
import { motion } from "framer-motion";
import Swf from "./swfFilter.jpg";
import Vista from "./vistaFilter.jpg";
import F3 from "./f3Filter.jpg"
import "./portfolio.css";

function portfolio() {
    return (
        <div className="portfolioBody">
            <div className="title" style={{textAlign: "center"}}>My Portfolio</div>
        <motion.div className="cardContainer"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <motion.div 
                className="card" 
                variants={cardVariants}
                whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
                    cursor: "pointer",
                }}
                  whileTap={{ scale: 1.1 }}
            >
                SWF
                <a href="https://securewaterfuture.net/"><span></span></a>
                <img src={Swf} alt="swfpic" className="cardimg"></img>
            </motion.div>
            <motion.div 
                className="card" 
                variants={cardVariants}
                whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
                    cursor: "pointer",
                }}
                  whileTap={{ scale: 1.1 }}
            >
                    VISTA
                    <a href="https://vista.ucmerced.edu/"><span></span></a>
                    <img src={Vista} alt="vistapic" className="cardimg"></img>
            </motion.div>
            <motion.div 
                className="card" 
                variants={cardVariants}
                whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
                    cursor: "pointer",
                }}
                  whileTap={{ scale: 1.1 }}
            >
                F3
                <a href="https://vista.ucmerced.edu/f3/"><span></span></a>
                <img src={F3} alt="f3pic" className="cardimg"></img>
             </motion.div>
             {/*<motion.div 
                className="card" 
                style={{color: "#6F1A07"}}
                variants={cardVariants}
                whileHover={{
                    scale: 1.2,
                    rotate: 0,
                    transition: { duration: 0.5, type: "spring", bounce: 0.3 },
                    cursor: "pointer",
                }}
                  whileTap={{ scale: 1.1 }}
            >
                UniFoodi
                <a href="https://securewaterfuture.net/"><span></span></a>
             </motion.div>*/}
        </motion.div>
    </div>
    );
};

const cardVariants = {
    offscreen: {
        y: "20rem",
    },
    onscreen: {
        y: "1rem",
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

export default portfolio;