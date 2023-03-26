import React from 'react'
import mission6 from './rspimg/mission 6.jpg'

import './flip.css'

const TestFlip = (props) => {
  const{img} = props
  return (
    <div class="container">
<div class="container1">
            <div class="front">
            <input type="image" img src = {img} alt="photo" />
                <h2>Ice cream</h2>
            </div>
            <div class="back">
                <h2>Ice cream</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nisi.</p>
            </div>
        </div>
    </div>
  )
}

export default TestFlip