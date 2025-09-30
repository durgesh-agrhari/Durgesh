import React, { useContext } from "react";
import "./AboutMe.css";
import { themeContext } from "../Context";

const dd = require('../img/durgeshcc.jpeg')

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`about-page ${darkMode ? "dark" : ""}`}>
      {/* <h1 className="about-title">About Me</h1> */}

      <div className="about-container">
        {/* Left Section */}
        <div className="about-left">
          <img
            src={dd}
            alt="profile"
            className="profile-img"
          />
          <h2 className="name">Durgesh Agrhari</h2>
          <p className="profession">Full Stack Developer</p>
          <p className="exp"> 2+ years of experience in web & mobile app development</p>

          <div className="founder-section">
            <h3>Founder Of</h3>
            <ul>
              <li>🚀 Reelbook App</li>
              <li>🤖 Interview GPT</li>
              <li>💰 Goodsplit App</li>
              <li>📚 Growupcode</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="about-right">
          <div className="section">
            <h3>Education</h3>
            <p>🎓 College: XYZ University</p>
            <p>🏫 School: ABC School</p>
          </div>

          <div className="section">
            <h3>Contact</h3>
            <p>📞 +91 9876543210</p>
            <p>📧 yourmail@gmail.com</p>
          </div>

          <div className="resume-btn">
            <a href="/resume.pdf" download>
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
