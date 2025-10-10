import React, { useContext } from "react";
import "./AboutMe.css";
import { themeContext } from "../Context";

const dd = require("../img/durgeshcc.jpeg");

const AboutMe = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={`about-page ${darkMode ? "dark" : ""}`}>
            {/* Top Profile Section */}
            <div className="about-top">
                <img src={dd} alt="profile" className="profile-img" />
                <h2 className="name">Durgesh Agrhari</h2>
                <p className="profession">Full Stack Developer</p>
                <p className="exp">
                    2+ years of experience in web & mobile app development
                </p>
            </div>

            {/* Cards Section */}
            <div className="cards-grid">
                {/* Founder Card */}
                <div className="info-card">
                    <h3>Founder Of</h3>
                    <ul>
                        <li>🚀 Reelbook App</li>
                        <li>🤖 Interview GPT</li>
                        <li>💰 Goodsplit App</li>
                        <li>📚 Growupcode</li>
                    </ul>
                    <div className="card-buttons">
                        <a href="http://reelbookapp.com" target="_blank" rel="noreferrer">
                            🌐 Visit Website
                        </a>
                        <a href="https://www.reelbookapp.com/DownloadApp" target="_blank" rel="noreferrer">
                            📱 Install App
                        </a>
                    </div>
                </div>

                {/* Education Card */}
                <div className="info-card">
                    <h3>Education : B.Tech (IT)</h3>
                    <p>🎓 College: KIET College Ghaziabad</p>
                    {/* <p>🏫 School: ABC School</p> */}
                </div>

                {/* Company Card */}
                <div className="info-card">
                    <h3>Company</h3>
                    <p>🏢 Current: L&T Technology Services Pvt Ltd</p>
                    {/* <p>💼 Ex: XYZ Software Solutions</p> */}
                </div>

                {/* Contact Card */}
                <div className="info-card">
                    <h3>Contact</h3>
                    <p>📞 +91 9876543210</p>
                    <p>📧 yourmail@gmail.com</p>
                </div>

            </div>
             {/* Resume Card */}

                <div className="about-top">
                    <h3>Resume</h3>
                    <a href="/resume.pdf" download>
                        📄 Download Resume
                    </a>
                </div>
        </div>
    );
};

export default AboutMe;
