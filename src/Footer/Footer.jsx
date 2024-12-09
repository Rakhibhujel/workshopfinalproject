import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="sandhya">
        <div className="footer-col-one">
          <h1>Get in Touch</h1>
          <p>Don't miss any updates of our new templates and extensions!</p>

          <div className="mail">
            <label for="email">Email</label>
            <input type="email" id="email"></input>
          </div>
          <button className="btns">Book Now</button>
        </div>
        <div className="footer-col-two">
          <h1>Download</h1>
          <div>
            <p>Company App</p>
            <p>Android App</p>
            <p>ios App</p>
            <p>Desktop</p>
            <p>Projects</p>
          </div>
        </div>
        <div className="footer-col-three">
          <h1>Help</h1>
          <p>FAQ</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-col-four">
          <h1>Team Solutions</h1>
          <div className="sndy">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
