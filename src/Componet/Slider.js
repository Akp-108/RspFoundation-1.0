import React, { useEffect, useState } from 'react'
import './Slider.css'
const Slider2 = (props) => {
    const{img1,img2,img3,img4,img5} = props;
    const[selectedImage, setSelectedImage] = useState(0)
    const[allImages] = useState([img1,img2,img3,img4,img5])
  
    useEffect(()=>{
      setInterval(() => {
        setSelectedImage(selectedImage => selectedImage < 4 ?  selectedImage+1 : 0)
      }, 4000);
    },[])
    return (
      <div className='slider'>
        <img src={allImages[selectedImage]} alt="" />
      </div>
    )
}

export default Slider2