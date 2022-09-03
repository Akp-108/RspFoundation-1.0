import React from 'react'
import director from './Img/director.jpg'
import './founder.css'

const President = () => {
  return (
    <div className="main">
      <header>
        <h1>President</h1>
        <hr /><br />
      </header>
        <div className='details'>

            <div >
                <img src={director} alt="" /> 
            </div>
            <div className='para'>
                <p>Mrs. Kalindi Pandey (born in India, 1972) is the President of RSP Foundation, Noida (UP), India. She is a well-known social worker and has worked with people belonging to nearly every niche of Indian Society and Culture. She has a keen interest in social work and is dedicated to the solutions to every common man's problems. She has promoted many people for education, better health, and self-employment.  With her wide experience of 30 years as a social worker, she explored a lot about the dark, dirty-political, and blood-sucking environment, that exists not only in corporate sector of India but also expanding in each component of a healthy society like food, education, and employment sector.It was a piece of painful information for her that, although this country has great biodiversity, about ten great rivers, fertilized agricultural lands over half of the </p>
            </div>
        </div>
        <div>
            <p>whole area of the country, and one of the leading manpower and talent, still Indians are categorized as a citizen of a developing country only. Soil, water, air, and all other natural resources are getting more toxic and contaminated day by day because people don’t know about waste management. The maximum population of our country is becoming poorer to make few people richer because people are unaware of self-employment and social entrepreneurship. Farmers are committing suicide because agriculture has become a high labour and money-consuming, loss-making sector. Maximum children are suffering from malnutrition because they are consuming anything without knowing its nutritional value. Women are neither safe nor free to live their life happily at their workplace, roadside, and even in their home. This is just because people are unable to utilize the natural resources as well as the talented youth power in a constructive way. Besides this, people are neither able to deliver the latest technology and equipment to the farmers, nor to provide any platform for medical, social, technological, and legal consultancy to the needful people. To serve humanity, to be a part of social change, and to improve the lifestyle of needy people, she took up the charge as President of the RSP Foundation.</p>
        </div>
    </div>
  )
}

export default President