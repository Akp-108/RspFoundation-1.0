import React from 'react'
import obj2 from './rspimg/obj 2.jpg'
import obj3 from './rspimg/obj 3.jpg'
import obj4 from './rspimg/obj 4.jpg'
import obj5 from './rspimg/obj 5.jpg'
import obj6 from './rspimg/obj 6.jpg'
import obj7 from './rspimg/obj 7.jpg'
import obj8 from './rspimg/obj 8.jpg'
import obj9 from './rspimg/obj 9.jpg'
import obj10 from './rspimg/obj 10.jpg'


import './MissionH.css'
import './flip.css'

const ObjectiveH = () => {

    return (
        <div>
            <div className="mission-head">


                <h1 style={{ color: "green" }}>Objective</h1>
                <hr /> <br />

            </div>

            <div className='imgContainer-mission'>
            <div class="container1">
            <div class="front">
            <input type="image" img src = {obj2} alt="photo" />
            </div>
            <div class="back">
                <p>To meet the people of ground level and understand their needs and survival problems</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj3} alt="photo" />
            </div>
            <div class="back">
                <p>To meet the representatives of different organizations, who are ready to be a part of us</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj4} alt="photo" />
            </div>
            <div class="back">
                <p>To aware the people about the latest technology, used in agriculture</p>
            </div>
        </div>
            </div>
            <div className='imgContainer-mission'>

                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj5} alt="photo" />
            </div>
            <div class="back">
                <p>To use the digital education for “ZERO ILLITERACY</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj6} alt="photo" />
            </div>
            <div class="back">
                <p>To provide a legal platform for social, legal, and economic issues</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj7} alt="photo" />
            </div>
            <div class="back">
                <p>To aware the people about importance and safety of ENVIRONMENT</p>
            </div>
        </div>
            </div>
            <div className='imgContainer-mission'>

                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj8} alt="photo" />
            </div>
            <div class="back">
                <p>To use the advance scientific approach for “HEALTH AT DOORSTEP”</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj9} alt="photo" />
            </div>
            <div class="back">
                <p>To aware the rural women about Women Rights</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {obj10} alt="photo" />
            </div>
            <div class="back">
                <p>To use the advance techniques for eradication of poverty</p>
            </div>
        </div>
            </div>
         
        </div>
    )
}

export default ObjectiveH