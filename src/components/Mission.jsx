import React, { useEffect, useRef } from 'react';

export default function Mission() {
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
    <section className="mission-section" ref={sectionRef}>
      <div className="mission-container">
        <div className="mission-image">
          <div className="mission-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
              alt="Community Empowerment"
            />
          </div>
        </div>
        
        <div className="mission-content">
          <div className="mission-content-inner">
            <h2 className="mission-title">
              Mission
              <span className="title-accent"></span>
            </h2>
            <p className="mission-tagline">
              Driving Change Through Compassion and Collaboration
            </p>
            <p className="mission-description">
              To empower lives through education, healthcare, and sustainability — creating self-reliant communities and lasting impact.
            </p>
            <p className="mission-details">
              We champion collaborative solutions that work hand-in-hand with local communities, developing sustainable programs that create a ripple effect of positive change globally.
            </p>
            <button className="mission-cta">
              Our Impact
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      {/* <div className="mission-float-element mission-float-1">Hello</div>
      <div className="mission-float-element mission-float-2"></div> */}
    </section>
  );
}