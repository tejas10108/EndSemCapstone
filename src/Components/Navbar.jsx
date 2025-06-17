import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Pomodoro App</h2>
            <ul>
                <li><Link to="/Pomodoro">Home</Link></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;