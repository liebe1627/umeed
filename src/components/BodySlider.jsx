import React, { useRef } from 'react';

export default function BodySlider() {
    const sliderRef = useRef(null);
    
    // Sample images - replace with your actual image URLs
    const images = [
        { id: 1, url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop', alt: 'Community 1' },
        { id: 2, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop', alt: 'Community 2' },
        { id: 3, url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&h=200&fit=crop', alt: 'Community 3' },
        { id: 4, url: 'https://images.unsplash.com/photo-1497375275294-c4c1b9fa4c87?w=300&h=200&fit=crop', alt: 'Community 4' },
        { id: 5, url: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=300&h=200&fit=crop', alt: 'Community 5' },
        { id: 6, url: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop', alt: 'Community 6' }
    ];

    return (
        <div style={{
            width: '100%',
            padding: '30px 0',
            position: 'relative',
            // backgroundColor: '#f5f5f5'
        }}>
            {/* Section Title */}
            {/* <div style={{
                textAlign: 'center',
                marginBottom: '30px',
                padding: '0 20px'
            }}>
                <h2 style={{
                    fontSize: '40px',
                    color: '#3d2817',
                    marginBottom: '8px'
                }}>
                    Our Work
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#3d2817'
                }}>
                    Making a difference in communities
                </p>
            </div> */}

            {/* Images Container */}
            <div className='bsimgcontainer'
                ref={sliderRef}
                
            >
                {images.map((image) => (
                    <div
                        key={image.id}
                        style={{
                            minWidth: '280px',
                            height: '200px',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Hide scrollbar */}
            <style>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}