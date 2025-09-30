// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { themeContext } from "./Context";
import "./App.css";
import AboutMe from "./pages/AboutMe";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        {/* Navbar appears on every page */}
        <Navbar />

        {/* Page content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutMe" element={<AboutMe />} />
          </Routes>
        </div>

        {/* Footer appears on every page */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;


// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Services from "./components/Services/Services";
// import "./App.css";
// import Experience from "./components/Experience/Experience";
// import Works from "./components/Works/Works";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { useContext } from "react";
// import { themeContext } from "./Context";
// function App() {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div
//       className="App"
//       style={{
//         background: darkMode ? "black" : "",
//         color: darkMode ? "white" : "",
//       }}
//     >
//       <Navbar />
//       <Intro />
//       <Services />
//       <Experience />
//       <Works />
//       <Portfolio />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
