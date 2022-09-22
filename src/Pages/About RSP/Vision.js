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
          
            <div >
                <div>
                <input type="image" img src = {jawan} alt="photo" />
                </div>
                <h2 style={{color:"green"}}>JAI JAWAN</h2>
            </div>
            <div >
                <input type="image" img src = {kisaan} alt="photo" />
                <h2 style={{color:"green"}}>JAI KISAN</h2>
            </div>
            <div >
                <input type="image" img src = {Vigyaan} alt="photo" />
                <h2 style={{color:"green"}}>JAI VIGYAN</h2> 
            </div>
        </div>
    </div>
  )
}

export default Vision