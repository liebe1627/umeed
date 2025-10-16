import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import welcomeToUmeed from '../static/images/welcomeToUmeed.png'
import successStories from '../static/images/successStories.png'
import ourMission from '../static/images/ourMission.png'
import getInvolved from '../static/images/getInvolved.png'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            title: "Welcome to Umeed",
            description: "Making a difference in communities",
            bgColor: "#ffd43b",
            image: welcomeToUmeed
        },
        {
            id: 2,
            title: "Our Mission",
            description: "Empowering lives through education",
            bgColor: "#3d2817",
            image: ourMission
        },
        {
            id: 3,
            title: "Get Involved",
            description: "Join us in creating change",
            bgColor: "#ffd43b",
            image: getInvolved
        },
        {
            id: 4,
            title: "Success Stories",
            description: "See the impact we've made",
            bgColor: "#3d2817",
            image: successStories
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="sparent">
            <div className="sdiv1" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#f5f5f5', borderRadius: '20px', height: '600px' }}>
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
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: slide.bgColor,
                                padding: '40px',
                                boxSizing: 'border-box',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Image on the right with fade out */}
                            <div style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                height: '100%',
                                width: '55%',
                                backgroundImage: `url('${slide.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
                                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
                            }} />

                            {/* Text content */}
                            <div style={{
                                padding: '60px',
                                borderRadius: '20px',
                                textAlign: 'center',
                                width: '85%',
                                position: 'relative',
                                zIndex: 5
                            }}>
                                <h2 style={{
                                    fontSize: '48px',
                                    color: slide.bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b',
                                    marginBottom: '20px',
                                    textAlign: 'left'
                                }}>
                                    {slide.title}
                                </h2>
                                <p style={{
                                    fontSize: '24px',
                                    color: slide.bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b',
                                    textAlign: 'left'
                                }}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {/* <button
                    onClick={prevSlide}
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 20,
                        transition: 'background-color 0.3s'
                    }}
                >
                    <ChevronLeft size={20} color={slides[currentSlide].bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b'} />
                </button>

                <button
                    onClick={nextSlide}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 20,
                        transition: 'background-color 0.3s'
                    }}
                >
                    <ChevronRight size={20} color={slides[currentSlide].bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b'} />
                </button> */}

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
                                height: '15px',
                                borderRadius: '50%',
                                border: `2px solid ${slides[currentSlide].bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b'}`,
                                backgroundColor: currentSlide === index ? (slides[currentSlide].bgColor === '#ffd43b' ? '#3d2817' : '#ffd43b') : 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, border-color 0.3s'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}