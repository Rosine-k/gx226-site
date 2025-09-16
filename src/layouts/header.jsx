import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/hommes">Hommes</Link></li>
          <li><Link to="/femmes">Femmes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
