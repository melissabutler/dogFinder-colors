import React from "react";

const DogDetail = ({ dog }) => {
    let imgurl = "/" + dog.src + ".jpg"
    console.log(imgurl)
    return (
        <div key={dog.src}>
            <h1>{dog.name}</h1>
            <h3> Age: {dog.age}</h3>
            <img src={imgurl}/>

            <h3>Some fun facts about {dog.name}!</h3>
            <ul>
                {dog.facts.map(f=> (
                <li>{f}</li>))}
            </ul>
        </div>
    )
}

export default DogDetail;