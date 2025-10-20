import React, { useState } from "react";

// Hamburger Icon Component
const HamburgerIcon = ({ isOpen }) => (
  <div className="hamburger-icon">
    <span className={isOpen ? "line line1 open" : "line line1"}></span>
    <span className={isOpen ? "line line2 open" : "line line2"}></span>
    <span className={isOpen ? "line line3 open" : "line line3"}></span>
  </div>
);

export default function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hparent1">
        <div className="hparent2">
          <div className="hdiv1">
            <img src="../logo.svg" alt="Logo" />
          </div>
          <div className="hdiv2">Umeed- The Hope For Living</div>

          {/* Desktop Navigation */}
          <div
            className="hdiv3 desktop-nav"
            onClick={() => scrollToSection(refs.achievementsRef)}
            style={{ cursor: "pointer" }}
          >
            Achievements
          </div>
          <div
            className="hdiv4 desktop-nav"
            onClick={() => scrollToSection(refs.ourWorkRef)}
            style={{ cursor: "pointer" }}
          >
            Our Work
          </div>
          <div
            className="hdiv5 desktop-nav"
            onClick={() => scrollToSection(refs.goalsRef)}
            style={{ cursor: "pointer" }}
          >
            Goals
          </div>

          {/* Hamburger Menu Button */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <HamburgerIcon isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.achievementsRef)}
        >
          Achievements
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.ourWorkRef)}
        >
          Our Work
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.goalsRef)}
        >
          Goals
        </div>
      </div>

      {/* Overlay */}
      {/* {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>} */}
    </>
  );
}
