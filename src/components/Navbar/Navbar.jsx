import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHamburger } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">
        <FaHamburger />
        <span>Fast Food</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/collection" onClick={() => setMenuOpen(false)}>
            Collection
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className="cart-icon"
            onClick={() => setMenuOpen(false)}
          >
            <FaShoppingCart />
            <span>{cartCount}</span>
          </NavLink>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>
    </nav>
  );
}

export default Navbar;