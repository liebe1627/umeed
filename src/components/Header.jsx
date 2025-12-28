import React, { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import logo from '../logo.svg';

export default function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = [
        { ref: refs.homeRef, name: '' },
        { ref: refs.achievementsRef, name: 'achievements' },
        { ref: refs.ourWorkRef, name: 'ourwork' },
        { ref: refs.goalsRef, name: 'goals' }
      ];


      for (let section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const handleNavClick = (ref, sectionName) => {
    scrollToSection(ref);
    setActiveSection(sectionName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className="hparent1"
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="hparent2">
          {/* Logo with Glow Effect */}
          <div
            className="hdiv1"
            style={{
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <img
              src={logo}
              alt="Umeed Logo"
              style={{
                transition: 'transform 0.3s ease, filter 0.3s ease',
                filter: 'drop-shadow(0 0 0px rgba(255, 215, 0, 0))',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.15) rotate(5deg)';
                e.target.style.filter = 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) rotate(0deg)';
                e.target.style.filter = 'drop-shadow(0 0 0px rgba(255, 215, 0, 0))';
              }}
            />
          </div>

          {/* Title */}
          <div
            className="hdiv2"
            style={{
              transition: 'color 0.3s ease'
            }}
          >
            Umeed - The Hope For Living
          </div>

          {/* Desktop Navigation with Active State */}
          <div
            className="hdiv3 desktop-nav"
            onClick={() => handleNavClick(refs.achievementsRef, 'achievements')}
            style={{
              cursor: "pointer",
              transition: 'all 0.3s ease',
              position: 'relative',
              fontWeight: activeSection === 'achievements' ? '700' : '400'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#2E8B57';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#3d2817';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Achievements
            {activeSection === 'achievements' && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '3px',
                  backgroundColor: '#2E8B57',
                  borderRadius: '2px',
                  animation: 'slideIn 0.3s ease'
                }}
              />
            )}
          </div>

          <div
            className="hdiv4 desktop-nav"
            onClick={() => handleNavClick(refs.ourWorkRef, 'ourwork')}
            style={{
              cursor: "pointer",
              transition: 'all 0.3s ease',
              position: 'relative',
              fontWeight: activeSection === 'ourwork' ? '700' : '400'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#2E8B57';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#3d2817';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Our Work
            {activeSection === 'ourwork' && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '3px',
                  backgroundColor: '#2E8B57',
                  borderRadius: '2px',
                  animation: 'slideIn 0.3s ease'
                }}
              />
            )}
          </div>

          <div
            className="hdiv5 desktop-nav"
            onClick={() => handleNavClick(refs.goalsRef, 'goals')}
            style={{
              cursor: "pointer",
              transition: 'all 0.3s ease',
              position: 'relative',
              fontWeight: activeSection === 'goals' ? '700' : '400'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#2E8B57';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#3d2817';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Goals
            {activeSection === 'goals' && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '3px',
                  backgroundColor: '#2E8B57',
                  borderRadius: '2px',
                  animation: 'slideIn 0.3s ease'
                }}
              />
            )}
          </div>

          {/* Hamburger Menu Button */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={28} color="#3d2817" style={{ cursor: 'pointer' }} />
            ) : (
              <Menu size={28} color="#3d2817" style={{ cursor: 'pointer' }} />
            )}
          </div>
        </div>

        {/* CTA Buttons Row - Desktop Only - Below main nav */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '15px',
            width: '100%'
          }}
        >
          <button
            style={{
              padding: '10px 28px',
              backgroundColor: '#FFD700',
              color: '#3d2817',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
              // fontFamily: '"Freckle Face", cursive'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.5)';
              e.target.style.backgroundColor = '#FFC700';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.3)';
              e.target.style.backgroundColor = '#FFD700';
            }}
          >
            Donate Now
          </button>
          <button
            style={{
              padding: '10px 28px',
              backgroundColor: '#2E8B57',
              color: '#ffffff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(46, 139, 87, 0.3)',
              // fontFamily: '"Freckle Face", cursive'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(46, 139, 87, 0.5)';
              e.target.style.backgroundColor = '#238B57';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(46, 139, 87, 0.3)';
              e.target.style.backgroundColor = '#2E8B57';
            }}
          >
            Join Us
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
        style={{
          top: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.achievementsRef, 'achievements')}
          style={{
            fontWeight: activeSection === 'achievements' ? '700' : '400',
            color: activeSection === 'achievements' ? '#2E8B57' : '#3d2817'
          }}
        >
          Achievements
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.ourWorkRef, 'ourwork')}
          style={{
            fontWeight: activeSection === 'ourwork' ? '700' : '400',
            color: activeSection === 'ourwork' ? '#2E8B57' : '#3d2817'
          }}
        >
          Our Work
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => handleNavClick(refs.goalsRef, 'goals')}
          style={{
            fontWeight: activeSection === 'goals' ? '700' : '400',
            color: activeSection === 'goals' ? '#2E8B57' : '#3d2817'
          }}
        >
          Goals
        </div>

        {/* Mobile CTA Buttons */}
        <div style={{ padding: '20px 30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#3d2817',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
              fontFamily: '"Freckle Face", cursive'
            }}
          >
            Donate Now
          </button>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#2E8B57',
              color: '#ffffff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '700',
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(46, 139, 87, 0.3)',
              fontFamily: '"Freckle Face", cursive'
            }}
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMenu}
        />
      )}

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 60%;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}