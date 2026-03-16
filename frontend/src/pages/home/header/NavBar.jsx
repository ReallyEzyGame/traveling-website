import { useState } from "react";
import { motion } from "framer-motion";
import "./header.css";

const navItems = ["Home", "Seeing", "About Us"];

export function NavBar() {
    const [activeTab, setActiveTab] = useState(navItems[0]);


    return (
        <nav className="navbar-container">
            {navItems.map((item) => (
                <button key={item} onClick={() => setActiveTab(item)} className={`nav-item ${activeTab === item ? "active-text" : ""}`}>
                    {activeTab === item && (
                        <motion.div layoutId="active-pill" className="active-indicator" transition={{type: "spring", bounce: 0.2, duration: 0.6}}/>
                    )}
                    <span className="nav-label">{item}</span>
                </button>
            ))}
        </nav>
    );
}