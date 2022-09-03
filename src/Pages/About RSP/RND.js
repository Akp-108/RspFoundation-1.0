import React from 'react'
import {rd} from './Goverdata'
import Rspcart from './Rspcart'

import './Aboutrsp.css'

const RND = () => {
  return (
    <div>
          <div>
        
        <div className="main">
        <h1 style={{color:"green"}}>Research and Development (R&D)</h1>
          <hr /> <br />
          <div className="items">
            {
              rd.map(v =>{
                return(
                  <Rspcart image = {v.img} Details = {v.details} topic = {v.topic} />
                )
              })
            }
          </div>
          <div  className = 'Rspbottomdata'>
            <h4> NOT A MEMBER YET? JOIN OUR ORGANIZATION TODAY AND BE A PART OF SOCIAL CHANGE!</h4>
          </div>
        </div>
        
          <br /><br />

    </div>
    </div>
  )
}

export default RND