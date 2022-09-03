

import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bar from "./Componet/Bar"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import Govnbody from "./Pages/About RSP/Govnbody"
import Founder from "./Pages/About Us/Founder"
import Director from "./Pages/About Us/Director"
import President from "./Pages/About Us/President"
import AboutUs from "./Pages/About Us/AboutUs"
import AboutRsp from "./Pages/About RSP/AboutRsp"
import Objective from "./Pages/About RSP/Objective"
import RND from "./Pages/About RSP/RND"
import Vision from "./Pages/About RSP/Vision"
import Mission from "./Pages/About RSP/Mission"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Bar />
        <Routes>
        <Route path="/home" element = { <Home />} />
        <Route path="/" element = { <Home />} />
        <Route path="/details" element = { <Details />} />
        <Route path="/govnbody" element = { <Govnbody />} />
        <Route path="/founder" element = { <Founder />} />
        <Route path="/director" element = { <Director />} />
        <Route path="/president" element = { <President />} />
        <Route path="/aboutus" element = { <AboutUs />} />
        <Route path="/aboutrsp" element = { <AboutRsp />} />
        <Route path="/objective" element = { <Objective />} />
        <Route path="/rnd" element = { <RND />} />
        <Route path="/vision" element = { <Vision />} />
        <Route path="/mission" element = { <Mission />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App