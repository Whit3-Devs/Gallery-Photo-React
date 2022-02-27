import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../assets/logo/logoab2.png"

const styles = {
  "width": "50px",
  "heigth": "45px"
}

export const NavTitleGallery = () => {
  return (
    <nav
      class="navbar fixed-top navbar-dark bg-dark"
      style={{ height: "80px" }}
    >
      <div class="container-fluid">
        <a href="#" class="navbar-brand ms-2">
          <img src={logo} alt="augusto blanco logo" style={styles} />
        </a>
        <ul className="navbar-nav d-flex flex-row justify-content-around" style={{"width": "15%"}}>
          <li className="navitem">
            <a href="https://github.com/Whit3-Devs">
              <AiFillGithub color="white" size="2.5rem"/>
            </a>
          </li>
          <li className="navitem">
            <a href="https://www.linkedin.com/in/blanco-augusto-r/">
              <AiFillLinkedin color="white" size="2.5rem"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
