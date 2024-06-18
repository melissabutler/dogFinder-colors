import React from "react";
import { Link } from "react-router-dom"
import "./ColorPage.css"

const ColorPage = ( {color} ) => {
        return (
            <body style={{backgroundColor: color.hexcode}}>
                <div className="ColorPage">
                    <h1 className="ColorPage-words"> WOAH IT'S {color.name.toUpperCase()}</h1>
                    <div>
                    <Link className="ColorPage-button" to="/colors">Back</Link>
                    </div>
                </div>
                
            </body>
        )
}

export default ColorPage;