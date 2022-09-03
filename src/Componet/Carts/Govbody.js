import React from 'react'
import './Cardcss/govbody.css'
const Govbody = (props) => {
  const {Name,Post,Speciaization,Mail, Img} = props

  return (
    
    <div className='mainsec'>
        <div className='imgsec'>
            <img src={Img} alt="atul" />
        </div>
        <div className='detailsec'>
           <div>
           <b >Name:</b>  <br /> <br />
            <b>Post:</b>  <br /> <br />
            <b>Speciaization:</b> <br />  <br />
            <b>Contact Mail:</b>  
           </div>

            <div className='names'>
            {Name} <br /> <br />
            {Post}  <br /> <br />
            {Speciaization}  <br /> <br />
            {Mail} <br /> <br />
            </div>
        </div>
    </div>
  )
}

export default Govbody