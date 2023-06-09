import React from 'react'
import Slider from '../Componet/Slider'
import img1 from '../images/green12.jpg'
import img2 from '../images/green9.jpg'
import img3 from '../images/green10.jpg'
import img4 from '../images/green8.jpg'
import img5 from '../images/green7.jpg' 
import baba2 from '../images/babaimg2.png'



import './Pagecss/Home.css'
import Vision from './About RSP/Vision'
import MissionH from './About RSP/MissionH'
import ObjectiveH from './About RSP/ObjectiveH'
import RND2 from './About RSP/RND2'

const Home = () => {
  return (
    <div className='main-home'>
      <div>
      <div>
        <Slider
           img1 = {img1} 
           img2 = {img2}
           img3 = {img3} 
           img4 = {img4}
           img5 = {img5}
        />
      </div>
      <div className='cot1'>
        <p>“HELP US RAISE MONEY FOR OUR HUMANITARIAN CAUSES”</p>
      </div>
      <div className="datamain">
        <div className='div-left'>
            <img src={baba2} alt="" />
        </div>
        <div className='div-right'>
          <h1>Welcome to the RSP Foundation</h1><br />
            <p>The RSP Foundation is a team of dedicated people involved in the social service voluntarily. RSP Foundation is a non-profit, non-government, multi-disciplinary membership based-national organization of individuals, institutions, and corporations, and principally dedicated to the enhancement of public awareness on conservation and up-gradation of environment and management of all form of air, water, and soil for the development of the happy and healthy society. Besides, RSP Foundation is also involved in India’s Rural Development, Social Entrepreneurship, Education solutions, Healthcare improvement, and Women Empowerment. 
            RSP Foundation invites you to Join Us and be a part of the team, which is restlessly working and dreaming for zero poverty, zero illiteracy, zero unemployment, and a happy society living in a non-toxic environment.
</p>
        </div>
      </div>

      </div>
      <div>
      <div>
        <Vision />
      </div>
      <div>
        <MissionH />
      </div>
      <div>
        <ObjectiveH />
      </div>
      <div>
        <RND2 />
      </div>
      <div>
        
      </div>
      </div>
      <div className='newsbar'>
          <div className='newsdata'>
           <p>Latest News</p>
          </div>
          <div className='newsdata'>
            <p> Reach us</p>
          </div>
        </div> <br />
        <div>
        <div className='cot1'>
        <p><div className='cot1'>
        <p>“HELP US RAISE MONEY FOR OUR HUMANITARIAN CAUSES”</p>
      </div></p>
        </div>
      </div>
      </div>
   
  )
}

export default Home