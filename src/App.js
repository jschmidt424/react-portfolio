import React from "react";
import "./assets/css/index.css";
import "./App.css";
import Landing from "./components/landing";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Blog from "./components/blog/blog";
import Contact from "./components/contact";
import RightNav from "./components/navigation/rightNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <RightNav />
    </div>
  );
}

export default App;
