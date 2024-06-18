import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import DogList from "./DogList";
import FilterDog from "./FilterDog";

        
const RoutesList = ({dogs}) => {
    return (
        <Routes>
          <Route 
          path="/dogs" 
          element={<DogList dogs={dogs}/>}
           />
          
          <Route 
          path="/dogs/:name" 
          element={<FilterDog dogs={dogs} />}
           />

          <Route 
          path="*" 
          element={<Navigate to="/dogs" />}
           />

        </Routes>
        )
}

export default RoutesList;