import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
