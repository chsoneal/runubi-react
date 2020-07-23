import React from 'react'

function Navbar() {
    return (
        <header>
        <div class="menu-toggle" id="hamburger">
          <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div class="container">
          <nav>
            <h1 class="brand"><a href="#">U<span>B</span>I 2020</a></h1>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#UBI">UBI</a></li>
                  <li><a href="#profile-cards">Candidates</a></li>
                  <li><a href="#contact-form">Contact</a></li>
              </ul>
          </nav>
      
          <div id="home" class="intro-home">
            <h1 class="ubi-1"><a href="https://us.openubiproject.org/">Universal Basic Income</a></h1>
            <h2><b>$1,000 to every American over the age of 18.</b></h2>
          </div>
        </div>
      </header>
     
       
    )
}

export default Navbar