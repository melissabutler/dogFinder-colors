import React from "react";
import { useParams } from "react-router-dom"
import DogDetail from "./DogDetail";

function FilterDog({dogs}) {
    const { name } = useParams();
    console.log(name)

    if(name) {
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );

        return <DogDetail dog={currentDog} />;
    }   

    return null;

}

export default FilterDog;