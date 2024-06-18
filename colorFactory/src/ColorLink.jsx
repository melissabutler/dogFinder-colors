import React from "react";
import { Link } from "react-router-dom";
import "./ColorLink.css"

const ColorLink = ( color ) => {
    return (
            <li className="ColorLink">
            <Link className="ColorLink-link" style={{backgroundColor: color.hexcode}} to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
    )
}

export default ColorLink;