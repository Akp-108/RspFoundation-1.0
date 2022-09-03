import React from 'react'
import {rspMission} from './Goverdata'
import Rspcart from './Rspcart'

const Mission = () => {
  return (
    <div>
  <div className="main">
  <h1 style={{color:"green"}}>Mission</h1>
    <hr /> <br />
    <div className="items">
      {
        rspMission.map(v =>{
          return(
            <Rspcart image = {v.img}  purpose = {v.topic} />
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

export default Mission