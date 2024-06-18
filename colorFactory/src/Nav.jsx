import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    return (
        <nav>
        <div>
        <ul className="Navbar">
            <li className="Navbar-link">
                <Link to="/colors">Home</Link>
            </li>
            <li className="Navbar-link">
                <Link to="/colors/new">New Color</Link>
            </li>
        </ul>
        </div>
        </nav>    
    )
}

export default Nav;