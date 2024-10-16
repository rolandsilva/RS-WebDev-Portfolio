import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import ResumePage from "./Pages/ResumePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
