import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import welcomeToUmeed from '../static/images/welcomeToUmeed.png';
import successStories from '../static/images/successStories.png';
import ourMission from '../static/images/ourMission.png';
import getInvolved from '../static/images/getInvolved.png';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const slides = [
        {
            id: 1,
            title: "Building Futures Through Education",
            description: "Every child deserves the opportunity to learn, grow, and achieve their dreams",
            cta: "Join Our Mission",
            image: welcomeToUmeed
        },
        {
            id: 2,
            title: "Empowering Communities Together",
            description: "Creating lasting change through healthcare access and sustainable development",
            cta: "Learn More",
            image: ourMission
        },
        {
            id: 3,
            title: "Your Support Changes Lives",
            description: "Join us in making a real difference in the lives of those who need it most",
            cta: "Get Involved",
            image: getInvolved
        },
        {
            id: 4,
            title: "Real Stories, Real Impact",
            description: "Witness the transformative power of compassion and community support",
            cta: "See Our Work",
            image: successStories
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsTransitioning(false), 800);
        }
    };

    const handlePrevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => setIsTransitioning(false), 800);
        }
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index !== currentSlide) {
            setIsTransitioning(true);
            setCurrentSlide(index);
            setTimeout(() => setIsTransitioning(false), 800);
        }
    };

    return (
        <div 
            className="sparent" 
            style={{ 
                marginTop: '100px',
                width: '100vw',
                maxWidth: '100%',
                marginLeft: 'calc(-50vw + 50%)',
                borderRadius: '0'
            }}
        >
            <div 
                className="sdiv1" 
                style={{ 
                    position: 'relative', 
                    overflow: 'hidden',
                    height: '100vh',
                    minHeight: '600px',
                    maxHeight: '800px',
                    borderRadius: '0'
                }}
            >
                {/* Slides Container */}
                <div style={{
                    display: 'flex',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    height: '100%'
                }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            style={{
                                minWidth: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Background Image with Ken Burns Effect */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: '-5%',
                                    left: '-5%',
                                    width: '110%',
                                    height: '110%',
                                    backgroundImage: `url('${slide.image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    animation: currentSlide === index ? 'kenBurns 12s ease-out infinite alternate' : 'none',
                                    transform: 'scale(1)',
                                }}
                            />

                            {/* Dark Gradient Overlay */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(46, 139, 87, 0.7) 0%, rgba(0, 0, 0, 0.6) 100%)',
                                    zIndex: 1
                                }}
                            />

                            {/* Text Content */}
                            <div 
                                className="slider-text-content"
                                style={{
                                    position: 'relative',
                                    zIndex: 5,
                                    textAlign: 'center',
                                    maxWidth: '900px',
                                    padding: '0 40px',
                                    animation: currentSlide === index ? 'fadeInUp 1s ease-out' : 'none'
                                }}
                            >
                                <h1 
                                    className="slider-title"
                                    style={{
                                        fontSize: '64px',
                                        color: '#ffffff',
                                        marginBottom: '30px',
                                        lineHeight: '1.2',
                                        fontWeight: '700',
                                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                                        animation: currentSlide === index ? 'fadeInUp 1s ease-out 0.2s backwards' : 'none'
                                    }}
                                >
                                    {slide.title}
                                </h1>
                                <p 
                                    className="slider-description"
                                    style={{
                                        fontSize: '28px',
                                        color: '#ffffff',
                                        lineHeight: '1.6',
                                        marginBottom: '50px',
                                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                                        animation: currentSlide === index ? 'fadeInUp 1s ease-out 0.4s backwards' : 'none',
                                        fontWeight: '400'
                                    }}
                                >
                                    {slide.description}
                                </p>
                                
                                {/* CTA Button */}
                                <button
                                    style={{
                                        padding: '18px 48px',
                                        fontSize: '22px',
                                        fontWeight: '700',
                                        backgroundColor: '#FFD700',
                                        color: '#3d2817',
                                        border: '3px solid #FFD700',
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 8px 30px rgba(255, 215, 0, 0.4)',
                                        animation: currentSlide === index ? 'fadeInUp 1s ease-out 0.6s backwards' : 'none',
                                        fontFamily: '"Freckle Face", cursive'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-5px) scale(1.08)';
                                        e.target.style.boxShadow = '0 12px 40px rgba(255, 215, 0, 0.6)';
                                        e.target.style.backgroundColor = '#ffffff';
                                        e.target.style.color = '#2E8B57';
                                        e.target.style.borderColor = '#2E8B57';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0) scale(1)';
                                        e.target.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.4)';
                                        e.target.style.backgroundColor = '#FFD700';
                                        e.target.style.color = '#3d2817';
                                        e.target.style.borderColor = '#FFD700';
                                    }}
                                >
                                    {slide.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevSlide}
                    disabled={isTransitioning}
                    style={{
                        position: 'absolute',
                        left: '30px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        opacity: isTransitioning ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (!isTransitioning) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.9)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                >
                    <ChevronLeft size={32} color="#ffffff" />
                </button>

                <button
                    onClick={handleNextSlide}
                    disabled={isTransitioning}
                    style={{
                        position: 'absolute',
                        right: '30px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        opacity: isTransitioning ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (!isTransitioning) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.9)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                >
                    <ChevronRight size={32} color="#ffffff" />
                </button>

                {/* Modern Dot Indicators */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '12px',
                    zIndex: 10
                }}>
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            style={{
                                width: currentSlide === index ? '50px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                border: '2px solid rgba(255, 255, 255, 0.8)',
                                backgroundColor: currentSlide === index ? '#FFD700' : 'rgba(255, 255, 255, 0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.4s ease',
                                boxShadow: currentSlide === index ? '0 4px 15px rgba(255, 215, 0, 0.6)' : 'none',
                                backdropFilter: 'blur(5px)'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                            onMouseEnter={(e) => {
                                if (!isTransitioning) {
                                    e.target.style.transform = 'scale(1.2)';
                                    e.target.style.backgroundColor = currentSlide === index ? '#FFD700' : 'rgba(255, 255, 255, 0.6)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.backgroundColor = currentSlide === index ? '#FFD700' : 'rgba(255, 255, 255, 0.3)';
                            }}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div 
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        zIndex: 10
                    }}
                >
                    <div 
                        style={{
                            height: '100%',
                            backgroundColor: '#FFD700',
                            animation: 'progress 5s linear infinite',
                            transformOrigin: 'left',
                            boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
                        }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes progress {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                @keyframes kenBurns {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.1);
                    }
                }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .slider-title {
                        font-size: 40px !important;
                    }
                    .slider-description {
                        font-size: 20px !important;
                    }
                    .slider-text-content button {
                        padding: 14px 36px !important;
                        font-size: 18px !important;
                    }
                }

                @media (max-width: 480px) {
                    .slider-title {
                        font-size: 32px !important;
                    }
                    .slider-description {
                        font-size: 16px !important;
                        margin-bottom: 30px !important;
                    }
                    .slider-text-content button {
                        padding: 12px 28px !important;
                        font-size: 16px !important;
                    }
                }
            `}</style>
        </div>
    );
}