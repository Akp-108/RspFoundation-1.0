import React from 'react'
import {Obejctive} from './Goverdata'
import Rspcart from './Rspcart'

import './Aboutrsp.css'

const AboutRsp = () => {
  return (
    <div>
        
        <div className="main">
        <h1 style={{color:"green"}}>Obejctive</h1>
          <hr /> <br />
          <div className="items">
            {
              Obejctive.map(v =>{
                return(
                  <Rspcart Img = {v.img} Data = {v.detail} />
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
  )
}

export default AboutRsp