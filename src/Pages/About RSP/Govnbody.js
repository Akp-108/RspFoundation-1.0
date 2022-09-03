import React from 'react'
import Govbody from '../../Componet/Carts/Govbody'
import {govbody} from './Goverdata'
import './gov.css'
const Govnbody = () => {
  return (
    <div className='maingov'>
       <div className='head'>Governing Body</div>
       <hr />
       <div className='govcard'>
      <div className='govdetails'>
      {
        govbody.map((v)=>{
          return(
            
              <Govbody 
                Img = {v.img}
                Name = {v.Name}
                Post = {v.Post}
                Speciaization = {v.Speciaization}
                Mail = {v.Mail}
              />    
          )
        })
     
      }
       </div>
    </div>
    </div>
  )
}

export default Govnbody
