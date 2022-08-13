import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
     <h1><Link to='/about'>About</Link></h1>
     <h1><Link to='/detail'>Detail</Link></h1>
    </div>
  )
}

export default Navigation