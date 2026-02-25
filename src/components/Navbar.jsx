import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo-transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Wise Verda Logo" style={{ width: "100px", height: "100px" }} />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>

        {/* Overlay */}
        <div
          className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
          onClick={closeMenu}
        />

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <li>
            <a href="#hero" className={styles.navLink} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#visimisi" className={styles.navLink} onClick={closeMenu}>
              Vision & Mission
            </a>
          </li>
          <li>
            <a href="#team" className={styles.navLink} onClick={closeMenu}>
              Team
            </a>
          </li>
          <li>
            <a href="#products" className={styles.navLink} onClick={closeMenu}>
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
