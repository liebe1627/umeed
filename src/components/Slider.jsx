import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Sample slides - replace with your actual images/content
    const slides = [
        {
            id: 1,
            title: "Welcome to Umeed",
            description: "Making a difference in communities",
            bgColor: "#ffd43b"
        },
        {
            id: 2,
            title: "Our Mission",
            description: "Empowering lives through education",
            bgColor: "#74c0fc"
        },
        {
            id: 3,
            title: "Get Involved",
            description: "Join us in creating change",
            bgColor: "#ff6b6b"
        },
        {
            id: 4,
            title: "Success Stories",
            description: "See the impact we've made",
            bgColor: "#51cf66"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="sparent">
            <div className="sdiv1" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5', borderRadius: '20px' }}>
                {/* Slides Container */}
                <div style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    height: '100%'
                }}>
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            style={{
                                minWidth: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: slide.bgColor,
                                padding: '40px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <h2 style={{
                                fontSize: '48px',
                                color: '#3d2817',
                                marginBottom: '20px',
                                textAlign: 'center'
                            }}>
                                {slide.title}
                            </h2>
                            <p style={{
                                fontSize: '24px',
                                color: '#3d2817',
                                textAlign: 'center'
                            }}>
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
                >
                    <ChevronLeft size={30} color="#3d2817" />
                </button>

                <button
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
                >
                    <ChevronRight size={30} color="#3d2817" />
                </button>

                {/* Dots Navigation */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '10px',
                    zIndex: 10
                }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: '2px solid #3d2817',
                                backgroundColor: currentSlide === index ? '#3d2817' : 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}