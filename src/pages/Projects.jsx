import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.css"; // your CSS
import { themeContext } from "../Context"; // import your theme context

import reelbook1 from '../img/projectsimages/reelbook1.jpg';
import reelbook2 from '../img/projectsimages/reelbook2.png';
import reelbook3 from '../img/projectsimages/reelbook1.jpg';

import goodsplit1 from '../img/projectsimages/goodsplit1.jpg';
import goodsplit2 from '../img/projectsimages/goodsplit1.jpg';
import goodsplit3 from '../img/projectsimages/goodsplit1.jpg';


import Growupcode1 from '../img/projectsimages/growup1.png';
import Growupcode2 from '../img/projectsimages/growup2.png';
import Growupcode3 from '../img/projectsimages/growup3.png';
import Growupcode4 from '../img/projectsimages/growup4.png';
import Growupcode5 from '../img/projectsimages/growup5.png';
import Growupcode6 from '../img/projectsimages/growup6.png';
import Growupcode7 from '../img/projectsimages/growup7.png';

import inno1 from '../img/projectsimages/inno1.png';
import inno2 from '../img/projectsimages/inno2.png';

import vaidya1 from '../img/projectsimages/vaidya1.png';
import drs1 from '../img/projectsimages/drs1.png';

import stack1 from '../img/projectsimages/stack1.png';
import interview1 from '../img/projectsimages/interview1.webp';


const projects = [
  {
    id: 1,
    name: "Reelbook App",
    images: [reelbook1, reelbook2, reelbook3],
    description: "A Social media app. where you can see short video in category video and you can earn through your activity and upload content.",
    tech: ["React Native", "Node.js", "mongodb", "Firebase","Socket.IO", "Redux", "Context", "Notifications"],
    links: {
      website: "http://reelbookapp.com",
      app: "https://play.google.com/store/apps/details?id=app_id",
      github: "https://github.com/durgesh-agrhari/ReelbookAds",
      more: "https://www.reelbookapp.com/DownloadApp",
    },
  },
  {
    id: 2,
    name: "GoodSplit App",
    images: [goodsplit1, goodsplit2, goodsplit3],
    description: "GoodSplit is make simple to split any group spend mony in any traival or hostal boys.",
    tech: ["React Native", "Firebase", "Redux", "Context", "Notifications"],
    links: {
      website: "https://goodsplit.reelbookapp.com",
      app: "https://play.google.com/store/apps/details?id=com.goodsplit",
      github: "https://github.com/durgesh-agrhari/GoodSplit",
      more: "https://goodsplit.reelbookapp.com/DownloadApp",
    },
  },
  {
    id: 3,
    name: "Interview GPT",
    images: [interview1],
    description: "You Can give interview by Ai, Get feedback and boost your confidance.",
    tech: ["React Native", "Node.js", "mongodb", "Firebase", "Redux", "Context", "Notifications", "Ai", "Python"],
    links: {
      website: "",
      app: "",
      github: "",
      more: "",
    },
  },
];



const webprojects = [
  {
    id: 1,
    name: "Growupcode",
    images: [Growupcode1, Growupcode2, Growupcode3, Growupcode4, Growupcode5, Growupcode6, Growupcode7],
    description: "A Social media app. where you can see short video in category video and you can earn through your activity and upload content.",
    tech: ["React Js", "Node.js", "mongodb", "Redux", "Context"],
    links: {
      website: "https://growupcode.vercel.app",
      app: "#",
      github: "https://github.com/durgesh-agrhari/Grow-up",
      more: "https://growupcode.vercel.app/DSA-Need-And-Clean-SDE-Sheet",
    },
  },
  {
    id: 2,
    name: "Innogeeks",
    images: [inno1, inno2],
    description: "Innogeeks, a remarkable joint initiative by both faculty and students, strives to elevate our institution",
    tech: ["React Js"],
    links: {
      website: "https://www.innogeeks.in/",
      app: "",
      github: "",
      more: "",
    },
  },
  {
    id: 3,
    name: "Stack Overflow Clone",
    images: [stack1],
    description: "Stack Overflow cone in react js responsive ",
    tech: ["React Js"],
    links: {
      website: "https://durgesh-agrhari.github.io/Stack-overflow-clone/",
      app: "",
      github: "",
      more: "",
    },
  },
];



const wordpressprojects = [
  {
    id: 1,
    name: "DrsTeckSkils",
    images: [drs1],
    description: "To become the world’s most trusted platform for upskilling tech professionals in emerging domains and future-ready software tools.",
    tech: ["wordpress", "Ecommerce", "Payment Interegration", "Custom css"],
    links: {
      website: "https://drstechskills.com",
      app: "",
      github: "",
      more: "https://drstechskills.com/courses/",
    },
  },
  {
    id: 2,
    name: "Vaidya Sutra",
    images: [vaidya1],
    description: "Your trusted source for natural medicine, offering herbal remedies and Ayurvedic solutions for a healthier life.",
    tech: ["wordpress",  "Ecommerce", "SEO"],
    links: {
      website: "https://vaidyasutra.com",
      app: "",
      github: "",
      more: "https://vaidyasutra.com/product/hand-sanitizer/",
    },
  },

];


const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`project-card ${darkMode ? "dark" : ""}`}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        className="project-carousel"
      >
        {project.images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={project.name} className="carousel-image" />
          </div>
        ))}
      </Carousel>

      <div className="project-content">
        <h2 className="project-name">{project.name}</h2>
        <p className="project-description">{project.description}</p>

        {/* <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-item">{t}</span>
          ))}
        </div> */}

        <div
          className="tech-stack"
          style={{
            display: 'flex',
            flexWrap: 'wrap',  // ✅ allows wrapping
            gap: '8px',        // optional spacing between items
          }}
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                padding: '4px 8px',
                backgroundColor: '#eee',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="btn website-btn">Visit Website</a>
          <a href={project.links.app} target="_blank" rel="noopener noreferrer" className="btn app-btn">Visit App</a>
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
          <a href={project.links.more} target="_blank" rel="noopener noreferrer" className="btn more-btn">More</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`projects-page ${darkMode ? "dark" : ""}`}>
      <h1 className="projects-title">My Mobile App Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>

      <h1 className="projects-title">My Web App Projects</h1>
      <div className="projects-grid">
        {webprojects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>

      <h1 className="projects-title">My Wordpress Projects</h1>
      <div className="projects-grid">
        {wordpressprojects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>

      <div style={{ paddingBottom: '100px' }} />
    </div>
  );
};

export default Projects;
