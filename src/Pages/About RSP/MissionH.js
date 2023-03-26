import React from 'react'
import mission1 from './rspimg/mission 1.jpg'
import mission2 from './rspimg/mission 2.jpg'
import mission3 from './rspimg/mission 3.jpg'
import mission5 from './rspimg/mission 4.jpg'
import mission4 from './rspimg/mission 5.jpg'
import mission6 from './rspimg/mission 6.jpg'

import './MissionH.css'

const Mission = () => {
  return (
    <div>
  <div className="mission-head">

    
  <h1 style={{color:"green"}}>Mission</h1>
    <hr /> <br />
  </div>

  <div className='imgContainer-mission'>
          
          <div >
              <div>
              <input type="image" img src = {mission1} alt="photo" />
              </div>
              <h2 style={{color:"green"}}>No Poverty</h2>
          </div>
          <div >
              <input type="image" img src = {mission2} alt="photo" />
              <h2 style={{color:"green"}}>No Hunger</h2>
          </div>
          <div >
              <input type="image" img src = {mission3} alt="photo" />
              <h2 style={{color:"green"}}>No Illiteracy</h2> 
          </div>
      </div>
  <div className='imgContainer-mission'>
          
          <div >
              <div>
              <input type="image" img src = {mission4} alt="photo" />
              </div>
              <h2 style={{color:"green"}}>No Unemployement</h2>
          </div>
          <div >
              <input type="image" img src = {mission5} alt="photo" />
              <h2 style={{color:"green"}}>No Pollution</h2>
          </div>
          <div >
              <input type="image" img src = {mission6} alt="photo" />
              <h2 style={{color:"green"}}>No Disease</h2> 
          </div>
      </div>
  
    <br /><br />

    
</div>
  )
}

export default Mission