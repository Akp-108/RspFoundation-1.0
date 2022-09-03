import React from 'react'
import jawan from './rspimg/jai jawan.jpg'
import kisaan from './rspimg/jai kisaan.jpg'
import Vigyaan from './rspimg/jai Vigyaan.jpg'

import './vision.css'
const Vision = () => {
  return (
    <div className='visionMain' >
        <h1 style={{color:"green"}}>Vision </h1><br />
          <hr /> <br />
          <p>Following the statement <b>"JAI JAWAN, JAI KISAN and JAI VIGYAN"</b> , to solve the problems of Poverty, Hunger, Illiteracy, Pollution, Disease, and Unemployment in our country</p>
        <div className='imgContainer'>
          
            <div className="imadata">
                <img src={jawan} alt="Image not found" />
                <h2 style={{color:"green"}}>JAI JAWAN</h2>
            </div>
            <div className="imadata">
                <img src={kisaan} alt="Image not found" />
                <h2 style={{color:"green"}}>JAI KISAN</h2>
            </div>
            <div className="imadata">
                <img src={Vigyaan} alt="Image not found" />
                <h2 style={{color:"green"}}>JAI VIGYAN</h2> 
            </div>
        </div>
    </div>
  )
}

export default Vision