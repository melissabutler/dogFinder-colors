import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ColorPage from "./ColorPage";

const FilterColor = ({ colors }) => {
    // const navigate = Navigate();
    const { color } = useParams();
    console.log("color", color.toLowerCase())

    const currentColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase())
    console.log(currentColor)
    if(currentColor) return <ColorPage color={currentColor} />;

return null;
  

    
}

export default FilterColor;