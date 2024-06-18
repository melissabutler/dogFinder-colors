import React, { useState } from "react";

import ColorLink from "./ColorLink";
import "./ColorList.css"

const ColorList = ({colors}) => {
   
    return(
        <div className="ColorList">
            <h1 className="ColorList-title">Colors!</h1>
            <div>
                <ul className="ColorList-list">
                {colors.map(color => 
                <ColorLink name={color.name} hexcode={color.hexcode} />
                )}
            </ul>
            </div>
            
        </div>
    )
}

export default ColorList;