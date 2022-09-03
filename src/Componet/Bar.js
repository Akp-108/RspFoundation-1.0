
import React from 'react'

import { Link } from 'react-router-dom'
import './ComponetCss/Bar2.css'

const Bar = () => {
  return (
    <div>
        <nav>
    <div className="logo">
       <Link to="/home"> Welcome To RSP Foundation</Link>
    </div>
    <ul>
        <li><Link to="/home">HOME</Link>
        
        </li>
        <li><Link to="/aboutrsp">About RSP</Link>
        <ul>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="objective">Objective</Link></li>
            <li><Link to="/rnd  ">R&D Work</Link></li>
            <li><Link to="/govnbody">Governing Body</Link></li>
        </ul>
    </li>
    <li><Link to="/aboutus">About Us</Link>
        <ul>
            <li><Link to="/founder">Founder</Link></li>
            <li><Link to="/president">President</Link></li>
            <li><Link to="/director">Director</Link></li>
            <li><Link to="/">Board of Trustees</Link></li>

            <li><Link to="/">Research Committee</Link>
                <span class="fa fa-plus">+</span>
                    <ul>
                        <li><Link to="/">National</Link></li>
                        <li><Link to="/">International</Link></li>
                    </ul>
                
            </li>
            <li><Link to="/">Advisory Committee</Link></li>
            <li><Link to="/">State Co-ordinators</Link></li>
            <li><Link to="/">Area Co-ordinators</Link></li>
        </ul>
    </li>
    <li><Link to="/">Projects</Link>
    <ul>
    <li><Link to="/">Completed</Link></li>
            <li><Link to="/">Current</Link></li>
            <li><Link to="/">Upcoming</Link></li>
    </ul>
    </li>
    <li><Link to="/">Join Us</Link>
        <ul>
            <li><Link to="/">Research Committee</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join Research Committee</Link></li>
                    </ul>
                
            </li>
            <li><Link to="/">Advisory Committee</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join Advisory Committee</Link></li>
                    </ul>
                
            </li>
            <li><Link to="/">Members</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join as a Member</Link></li>
                    </ul>
                
            </li>
            <li><Link to="/">State Co-ordinator</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join as a State Co-ordinator</Link></li>
                    </ul>
            </li>
            <li><Link to="/">Area Co-ordinator</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join as a Area Co-ordinator</Link></li>
                    </ul>
            </li>
            <li><Link to="/">Volunteer</Link>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Guidelines</Link></li>
                        <li><Link to="/">Join as a Volunteer</Link></li>
                    </ul>
            </li>
           
        </ul>
    </li>
    <li><Link to="/">Sponsor</Link>
     <ul>
        <li><Link to="/">Current Sponsors</Link></li>
        <li><Link to="/">Sponsors committee</Link></li>
        <li><Link to="/">Guidelines</Link></li>
        <li><Link to="/">Sponsorship form</Link></li>
     </ul>
    </li>
    <li><Link to="/">Donate</Link></li>
    <li><Link to="/">Contact Us</Link></li>
    </ul>
   
</nav>
    </div>
  )
}

export default Bar