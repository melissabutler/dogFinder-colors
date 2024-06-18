import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import "./ColorForm.css"

const ColorForm = ({addColor} ) => {

    const navigate = useNavigate()
    const initialState = {
        name: "",
        hexcode: "#000000", 
    }

    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name === ""){
            alert("Please submit a name!")
        } else {
            addColor({...formData});
            setFormData(initialState);
            navigate('/colors')
        }

        
        
    }

    return (
        <div className="ColorForm">
            <h1 className="ColorForm-title">Submit a Color!</h1>
            <form className="ColorForm-form" onSubmit={handleSubmit}>
                <div className="ColorForm-label">
                    <label htmlFor="name">Color Name</label>
                </div>            
                <input
                    id="name"
                    type="text"
                    name="name"f
                    placeholder="Color Name"
                    value={formData.name}
                    onChange={handleChange}
                    />

                <div className="ColorForm-label">
                    <label htmlFor="hexcode">Color Value</label>
                </div>
                    <input
                    id="hexcode"
                    type="color"
                    name="hexcode"
                    placeholder="Color Value"
                    value={formData.hexcode}
                    onChange={handleChange}
                    />
            <div>
                <button>Submit</button>
            </div>
            
            </form>
        </div>
    )

}

export default ColorForm;