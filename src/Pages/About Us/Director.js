import React from 'react'
import imgDirector from './Img/cofounder.jpg'

import './founder.css'

const Director = () => {
  return (
    <div className='main'>
        <header>
            <h1>Director & co-founder</h1>
            <hr /><br />
        </header>
        <div className="details">
            <div>
                <img src={imgDirector} alt="Image not found" />
            </div>
            <div className='para'>
                <p>Ms. Indu Pandey (born in India, 1995) is Co-founder and Director of RSP Foundation, Noida (UP), India. She has completed her BCA and MBA with dual specializations in HR and operations. She has a wide experience of more than five years in the corporate sector and she has trained hundreds of young talents in professional work practice, entrepreneurship, human resources management, and corporate management at the internship level. She has served as Human Resources Manager, Educator & Career counselor and involved in HRD training activities. 
                Her special areas of interest include Professional social work practice, Human resources management, NGO management, Project management, training, and capacity building for NGOs, Social research, etc. She has had wide professional experience in designing curriculum on Social work, Human resources management, HRD training and Development, Family Life Management, and Environmental education
</p>
            </div>
        </div>
        <div>
            <p>In memory of her inspiration, her most loving and caring, her “BABA JI”, after being blessed as the dearest beloved grandchild of her grandfather (Late Mr. Ramshankar Pandey), she came up with an idea of RSP Foundation on just a pen and paper, and with her whole enthusiasm and dedication, she has started RSP Foundation with her brother. As a Social entrepreneur, She has not only tried to involve help from friends and organizations and the world but also brought global knowledge to help locally. With a background of implementing new ideas that revitalize, challenge, and grow local communities she has created a ground-breaking social enterprise that without doubt touches and enriches the lives of children, youth, women, and dysfunctional families through networking initiatives.</p>
        </div>
    </div>
  )
}

export default Director