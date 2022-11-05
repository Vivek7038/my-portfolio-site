import React from 'react'
import Typewriter from "typewriter-effect";
const Header = () => {
  return (

      
  <nav>
  <NavContent/>
  
</nav>
  );

};


const NavContent =()=>{
  return (

    <>
  <h2>Vivek.</h2>
  <div>
    <a  href="#home">Home</a>
    <a  href="#work">work</a>
    <a  href="home">Experience</a>
    <a  href="#Services">Services</a>
    <a  href="#Testimonials">Testimonials</a>
    <a  href="#Contact">Contact</a>
    
  </div>
  <a href="mailto:vivek888chavan@gmail.com">
    <button>Mail</button>
  </a>
  
  </>
);
}

export default Header