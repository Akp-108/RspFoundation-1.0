import React from 'react'

import './ComponetCss/Bar.css'

const Bar = () => {
  return (
    <div>
        <nav>
    <div className="logo">
       <a href="/about"> Welcome To RSP Foundation</a>
    </div>
    <ul>
        <li><a href="/about">HOME</a>
        
        </li>
        <li><a href="/details">About RSP</a>
        <ul>
            <li><a href="/">Vision</a></li>
            <li><a href="/">Mission</a></li>
            <li><a href="/">Objective</a></li>
            <li><a href="/">R&D Work</a></li>
            <li><a href="/">Governing Body</a></li>
        </ul>
    </li>
    <li><a href="/">About Us</a>
        <ul>
            <li><a href="/">Founder</a></li>
            <li><a href="/">President</a></li>
            <li><a href="/">Director</a></li>
            <li><a href="/">Board of Trustees</a></li>

            <li><a href="/">Research Committee</a>
                <span class="fa fa-plus">+</span>
                    <ul>
                        <li><a href="/">National</a></li>
                        <li><a href="/">International</a></li>
                    </ul>
                
            </li>
            <li><a href="/">Advisory Committee</a></li>
            <li><a href="/">State Co-ordinators</a></li>
            <li><a href="/">Area Co-ordinators</a></li>
        </ul>
    </li>
    <li><a href="/">Projects</a>
    <ul>
    <li><a href="/">Completed</a></li>
            <li><a href="/">Current</a></li>
            <li><a href="/">Upcoming</a></li>
    </ul>
    </li>
    <li><a href="/">Join Us</a>
        <ul>
            <li><a href="/">Research Committee</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join Research Committee</a></li>
                    </ul>
                
            </li>
            <li><a href="/">Advisory Committee</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join Advisory Committee</a></li>
                    </ul>
                
            </li>
            <li><a href="/">Members</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join as a Member</a></li>
                    </ul>
                
            </li>
            <li><a href="/">State Co-ordinator</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join as a State Co-ordinator</a></li>
                    </ul>
            </li>
            <li><a href="/">Area Co-ordinator</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join as a Area Co-ordinator</a></li>
                    </ul>
            </li>
            <li><a href="/">Volunteer</a>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Guidelines</a></li>
                        <li><a href="/">Join as a Volunteer</a></li>
                    </ul>
            </li>
           
        </ul>
    </li>
    <li><a href="/">Sponsor</a>
     <ul>
        <li><a href="/">Current Sponsors</a></li>
        <li><a href="/">Sponsors committee</a></li>
        <li><a href="/">Guidelines</a></li>
        <li><a href="/">Sponsorship form</a></li>
     </ul>
    </li>
    <li><a href="/">Donate</a></li>
    <li><a href="/">Contact Us</a></li>
    </ul>
   
</nav>
    </div>
  )
}

export default Bar