import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";

function portfolio() {
    return (
        <div className="portfolioBody">
            <div className="title" style={{textAlign: "center"}}>My portfolio</div>
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
                UniFoodi
             </motion.div>
        </motion.div>
    </div>
    );
};

const cardVariants = {
    offscreen: {
        y: "20rem",
    },
    onscreen: {
        y: "5rem",
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

export default portfolio;