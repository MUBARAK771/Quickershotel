import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
