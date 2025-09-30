import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.css"; // your CSS
import { themeContext } from "../Context"; // import your theme context

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XxnkqGKKwYumVcA3yW74WPlD6okGSyjarQ&s",
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVFuinYEgjl_spE7kTOJPZ2qMYF59_BZld62qcjl5ArQZUNryzSQix8lyEOcNqnivth4&usqp=CAU",
    ],
    description: "A personal portfolio showcasing my skills, projects, and blogs.",
    tech: ["React", "CSS", "Framer Motion"],
    links: {
      website: "https://yourwebsite.com",
      app: "https://play.google.com/store/apps/details?id=app_id",
      github: "https://github.com/your-username/portfolio",
      more: "#",
    },
  },
  {
    id: 2,
    name: "E-Commerce App",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XxnkqGKKwYumVcA3yW74WPlD6okGSyjarQ&s",
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVFuinYEgjl_spE7kTOJPZ2qMYF59_BZld62qcjl5ArQZUNryzSQix8lyEOcNqnivth4&usqp=CAU",
    ],
    description: "A full-stack e-commerce platform with authentication & payments.",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      website: "https://ecommerce-demo.com",
      app: "https://play.google.com/store/apps/details?id=ecom_app",
      github: "https://github.com/your-username/ecommerce",
      more: "#",
    },
  },
  {
    id: 3,
    name: "Chat Application",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XxnkqGKKwYumVcA3yW74WPlD6okGSyjarQ&s",
      "https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVFuinYEgjl_spE7kTOJPZ2qMYF59_BZld62qcjl5ArQZUNryzSQix8lyEOcNqnivth4&usqp=CAU",
    ],
    description: "Real-time chat app with Socket.IO and private/group messaging.",
    tech: ["React", "Express", "Socket.IO"],
    links: {
      website: "https://chatapp.com",
      app: "https://play.google.com/store/apps/details?id=chat_app",
      github: "https://github.com/your-username/chat-app",
      more: "#",
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

        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-item">{t}</span>
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>

      <h1 className="projects-title">My Wordpress Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} darkMode={darkMode} />
        ))}
      </div>

      <div style={{ paddingBottom:'100px'}} />
    </div>
  );
};

export default Projects;
