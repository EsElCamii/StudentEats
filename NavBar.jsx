import React from "react";
import "./NavBar.css";

const NavBar = ({ toggleCart, isBouncing }) => {
  const handleMenuClick = (event) => {
    event.preventDefault();
    const menuSection = document.querySelector("#menu");
    const yOffset = -80; 
    const yPosition = menuSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const handleSpecialPlateClick = (event) => {
    event.preventDefault();
    const specialSection = document.querySelector("#specialPlate");
    specialSection.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <nav>
          <ul className="navbar-menu">
            <li>
              <a href="#menu" onClick={handleMenuClick} id="menu-button">
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#specialPlate" 
                onClick={handleSpecialPlateClick}
                id="specialPlate-button"
              >
                Plato Especial
              </a>
            </li>
            <li>
              <a
                href="https://www.noordwijk.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                id="about-button"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-center">
        <div className="logo-container">
          <img
            src="https://trabajoeneducacion.mx/files/pictures/Logo_Noordwijk_logo_institucnew_%282%29.png"
            alt="Logo"
            className="logo"
            onClick={handleLogoClick}
          />
        </div>
      </div>
      <div className="navbar-right">
        <nav>
          <ul className="navbar-menu">
            <li>
              <a href="#contact" onClick={handleContactClick}>
                Contact
              </a>
            </li>
            <li>
              <a
                id="carritoButton"
                href="#cart"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCart();
                }}
                className={isBouncing ? "bounce" : ""}
              >
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
