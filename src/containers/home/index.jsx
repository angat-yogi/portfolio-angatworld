import React from "react";
import { Animate } from "react-simple-animate";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaHandshake,
} from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume_F22.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello! Welcome to Angat's world!
          {/* <br />
          Front End Developer. */}
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Want to hire me?</button>
            <a onClick={onButtonClick}>Download My Resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaFacebook size={32} />
            <FaInstagram size={32} />
            <FaYoutube size={32} />
            <FaHandshake size={32} />
            <FaLinkedin size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
