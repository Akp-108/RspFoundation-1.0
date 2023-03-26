import React from 'react'

import rnd1 from './rspimg/rnd 1.jpg'
import rnd2 from './rspimg/rnd 2.jpg'
import rnd3 from './rspimg/rnd 3.jpg'
import rnd4 from './rspimg/rnd 4.jpg'
import rnd5 from './rspimg/rnd 5.jpg'
import rnd6 from './rspimg/rnd 6.jpg'
import rnd7 from './rspimg/rnd 7.jpg'
import rnd8 from './rspimg/rnd 8.jpg'
import rnd9 from './rspimg/rnd 9.jpg'

const RND2 = () => {
    return (
        <div>
            <div className="mission-head">


                <h1 style={{ color: "green" }}>Research and Development (R&D)</h1>
                <hr /> <br />

            </div>

            <div className='imgContainer-mission'>
            <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd1} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Animal)</h1>
                <p>- To provide the best animal husbandry and healthcare advice with advanced technologies for self-employment in rural areas.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd2} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Medical)</h1>
                <p>To aware, consult and provide appropriate, affordable, acceptable, and accessible new vaccines, drugs, diagnostics, devices, and other health tools, that are needed to continue the arc of a healthy society.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd3} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Industrial)</h1>
                <p>To provide a platform for service and consultancy related to small and home-based industrial development at a microscale.</p>
            </div>
        </div>
            </div>
            <div className='imgContainer-mission'>

                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd4} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Agriculture)</h1>
                <p>To search and deliver the best consultancy and services related to economical agriculture to the farmers.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd5} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Computational)</h1>
                <p>To provide computational solutions and consultancy for all the problems related to rural development.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd6} alt="photo" />
            </div>
            <div class="back">
                <h1>R&D (Food)</h1>
                <p> To provide a nutritional solution related to the amount and quality of food that is produced, marketed, and consumed.</p>
            </div>
        </div>
            </div>
            <div className='imgContainer-mission'>

                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd7} alt="photo" />
                <h2>Burger</h2>
            </div>
            <div class="back">
                <h2>R&D (Environmental)</h2>
                <p>To look for each aspect that promotes and improves the quality of all environmental components and reduces the pollutants from the environment.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd8} alt="photo" />
                <h2>Burger</h2>
            </div>
            <div class="back">
                <h2>R&D (Ethical)</h2>
                <p>To provide a consultancy and service platform for all legal and ethical issues related to social, economic, and environmental problems.</p>
            </div>
        </div>
                <div class="container1">
            <div class="front">
            <input type="image" img src = {rnd9} alt="photo" />
                <h2>Burger</h2>
            </div>
            <div class="back">
                <h2>R&D (Marine)</h2>
                <p>To search for all new techniques and aspects that utilize marine resources for the betterment of humanity and the environment.
.
</p>
            </div>
        </div>
            </div>
         
        </div>
    )
}

export default RND2