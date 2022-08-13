

import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bar from "./Componet/Bar"
import About from "./Pages/About"
import Details from "./Pages/Details"
const App = () => {
  return (
    <div>
      this is data
      <BrowserRouter>
        <Bar />
        <Routes>
        <Route path="/about" element = { <About />} />
        <Route path="/details" element = { <Details />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App