import React from "react";
import bannerImg from "../assets/banner.png";
import Logo from "../assets/logo.png";

export default function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0px 3px 6px rgba(0,0,0,0.7)",
        fontSize: "2rem",
      }}
    >
        <div className="banner-bloc">
            <h1 className="banner-h1">GEORGES DE BAZIRI</h1>
        <img src={Logo} alt="Logo" className="banner-logo" />
        </div>
        
              
    </div>
  );
}
