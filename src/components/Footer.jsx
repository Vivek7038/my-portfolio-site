import React from "react";
import {
  AiFillGithub,
AiFillLinkedin,
AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import profile from "../assets/profile.png";
const Footer = () => {
  return (
    <footer>
      <div>
        <img
                 src={profile}
          alt="Founder"
        />

        <h2>Vivek Chavan</h2>
        <p>" Motivation is temporary, but discipline last forever." </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.instagram.com/vivek_chavan34/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/vivek-chavan-65030a16b" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://github.com/Vivek7038" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;