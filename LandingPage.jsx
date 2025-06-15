import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const handlePideAhoraClick = (event) => {
    event.preventDefault();
    const menuSection = document.querySelector("#menu");
    const yOffset = -70; // Adjust as needed
    const yPosition = menuSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <main>
      <div className="front-content" id="frontPage">
        <h1>Noordwijk Cafetería</h1>
        <h2 id="message">
          ¿Cansado de las filas? <a href="#menu" id="pideAhora" onClick={handlePideAhoraClick}>Pide Ahora!</a>
        </h2>
      </div>
    </main>
  );
};

export default LandingPage;
