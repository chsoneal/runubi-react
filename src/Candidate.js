import React from 'react'

const Candidate = ({name, district, src, state, about, href}) => {
    return( 
        <div class="card">
            <img src="https://maskanusa.com/wp-content/uploads/2019/07/1.jpg" alt="card background" class="card-img"/>
            <img class="profile-img" src={src} alt="card profile"/>
            <h1>{name}</h1>
            <p class="job-title">{state} Candidates</p>
            <p class="district">District: <span class="district-name">{district}</span></p>
            <p class="about">{about}</p>
            <a href={href} class="btn">Contact</a>
            <ul class="social-media">
            <li><a href="https://ballotpedia.org/Rashad_Dwayne_Lloyd"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instgram"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        </ul>
            
        </div>
    )
}

export default Candidate