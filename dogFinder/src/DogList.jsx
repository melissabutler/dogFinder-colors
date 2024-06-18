import React, { useState } from "react";
import DogDetail from "./DogDetail";



const DogList = ({dogs}) => {
    console.log("DogList Dogs", dogs)
    return (
        <div>
            {dogs.map(d => (
                <DogDetail dog={d}/>
            ))}

        </div>
    )
}

export default DogList;