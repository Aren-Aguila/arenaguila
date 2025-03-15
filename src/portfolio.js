import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";

function portfolio() {
    return (
        <div className="portfolioContainer">
            {/* Portfolio Segment*/}
            <div className="portfolioCard">SWF</div>
            <div className="portfolioCard">VISTA</div>
            <div className="portfolioCard">F3</div>
            <div className="portfolioCard">UniFoodi</div>
        </div>
    );
};

export default portfolio;