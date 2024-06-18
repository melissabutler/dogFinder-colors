import React, { useState } from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom'


import RoutesList from './Routes'
import Nav from './Nav'

function App() {
  const initialState = [
    {name: "blue", hexcode: "#1e00ff"},
    {name: "pink", hexcode: "#DB76B1"}
]

  const [colors, setColors] = useState(initialState);

const addColor = (newColor) => {
    setColors(colors => [...colors, {...newColor}])
}

  return (
    <div>
      
     
      <BrowserRouter> 
          <Nav />
        <RoutesList addColor={addColor} colors={colors} />
      </BrowserRouter>
    </div>
  )
}

export default App;
