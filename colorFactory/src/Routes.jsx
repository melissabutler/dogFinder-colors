import { Routes, Route, Navigate } from "react-router-dom";

import ColorForm from "./ColorForm";
import FilterColor from "./FilterColor";
import ColorList from "./ColorList";

const RoutesList = ({colors, addColor}) => {
    
    return (
        <div>
        <Routes>
            <Route 
            path="/colors" 
            element={<ColorList colors={colors}/>} 
            />

            <Route 
            path="/colors/new" 
            element={<ColorForm addColor={addColor}/>} 
            />

            <Route 
            path="/colors/:color" 
            element={<FilterColor colors={colors}/>} 
            />

            <Route 
            path="*" 
            element={<Navigate to="/colors" />} 
            />

        </Routes>
        </div>
    )
} 

export default RoutesList;