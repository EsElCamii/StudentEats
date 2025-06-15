import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contáctenos</h4>
          <p>Email: info@noordwijkcafe.com</p>
          <p>Teléfono: +52 123 456 7890</p>
          <p>Dirección: 1234 Noordwijk St, Ciudad, País</p>
        </div>
        <div className="footer-section">
          <h4>Horarios de Operación</h4>
          <p>Lun - Vie: 7:00 AM - 7:00 PM</p>
          <p>Sáb - Dom: 8:00 AM - 5:00 PM</p>
        </div>
        <div className="footer-section social-icons">
          <h4>Síguenos</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> <br />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> <br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Noordwijk Cafetería. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
