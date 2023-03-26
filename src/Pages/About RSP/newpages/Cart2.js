import React from 'react'

const Cart2 = (props) => {
  const {Img, Data, topic, image, Details, purpose} = props
  return (
    <div>
    <div>
        <div className='data' >
            <img src={Img} alt="" />
        </div>
        <div>
            <h3>{Data}</h3>
        </div>
        <br /> <br />
    </div>
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className='puspose'>
        <h2>{purpose}</h2>
      </div>
      <div className='div_data'>
        <h3>{topic}</h3>
        <h4>{Details}</h4>
      </div>
    </div>
    </div>
  )
}

export default Cart2