import React from 'react'
import img from './Img/founder.jpg'
import './founder.css'
const Founder = () => {
  return (
    <div className="main">
      <header>
        <h1>Founder</h1>
        <hr /><br />
      </header>
    <div className='details'>

        <div >
            <img src={img} alt="" /> 
        </div>
        <div className='para'>
        <p>Mr. Pawan Kumar Pandey after obtaining MTech Degree in Biotechnology with specializations in Medical and Nanobiotechnology from IIT-Mandi (Himachal Pradesh), started his career as a Research Scholar from AIIMS -New Delhi. He has significant years of teaching experience to his credit so far. A visionary social architect who embarked on a social development mission in 2020-21 using Education (as the strategic medium to eradicate illiteracy), Research (to promote the lifestyle & to provide Cheap and best medical facilities), and Development (to make the rural areas more developed and to provide youth more employment), he came up with an idea including the fusion of science, technology, and corporate sector with rural life. And this idea was later developed in form of the RSP Foundation</p>
        </div>
        
    </div>
    <div>
    <p>Mr. Pawan Kumar Pandey is a big fan of Late Shri Lal Bahadur Shastri and Late Shri Atal Bihari Vajpayee, Former Prime Ministers of India and he strongly believes that, if any country follows the statement "JAI JAWAN, JAI KISAN and JAI VIGYAN", miracles of development will surely knock the door. Mr. Pawan Kumar Pandey has been working relentlessly for Zero Poverty, Zero Hunger, Zero Illiteracy, and Zero Unemployment in our country. </p>
    </div>
    </div>
  )
}

export default Founder