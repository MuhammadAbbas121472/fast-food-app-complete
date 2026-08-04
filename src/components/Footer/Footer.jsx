import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>🍔 Fast Food</h2>
          <p>
            Delicious burgers, pizzas and cold drinks delivered fresh to your
            doorstep.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Karachi, Pakistan</p>
          <p>📧 support@fastfood.com</p>
          <p>📞 +92 300 1234567</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Fast Food App | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;