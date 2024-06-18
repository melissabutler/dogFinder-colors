import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import RoutesList from './RoutesList'
import Nav from "./Nav"
import DogList from './DogList'
// import DogDetail from './DogDetail'
import defaultDogs from './defaultProps'

function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Nav dogs={defaultDogs}/>
        <RoutesList dogs={defaultDogs}/>
      
      </BrowserRouter>
    </div>
  )
}

export default App;
