import React, { useEffect, useRef } from 'react';

export default function Vision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="vision-overlay"></div>
      
      <div className="vision-container">
        <div className="vision-content">
          <div className="vision-content-inner">
            <h2 className="vision-title">
              Vision
              <span className="title-accent-gold"></span>
            </h2>
            <p className="vision-tagline">
              A Future Where Everyone Thrives
            </p>
            <p className="vision-description">
              A world where every person has the opportunity to thrive, contribute, and live with dignity.
            </p>
            <p className="vision-details">
              We envision marginalized communities empowered through sustainable development, fostering positive social change and creating a brighter future for generations to come.
            </p>
            <button className="vision-cta">
              Join Our Vision
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
        
        <div className="vision-image">
          <div className="vision-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
              alt="Bright Future"
            />
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      {/* <div className="vision-glow-element vision-glow-1"></div>
      <div className="vision-glow-element vision-glow-2"></div> */}
    </section>
  );
}