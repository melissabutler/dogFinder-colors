import React from "react";
import { Link } from "react-router-dom";
import defaultDogs from "./defaultProps";

function Nav( dogs ) {
    console.log("defaultDogs")
    return (
        <ul>
            <li> <Link to="/dogs">Home</Link></li>
            {defaultDogs.map(dog => (
                <li key={dog.src}>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav;