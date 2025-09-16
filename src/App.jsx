import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header.jsx";
import Accueil from "./pages/accueil.jsx";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        
      </Routes>
    </Router>
  );
}

export default App;



