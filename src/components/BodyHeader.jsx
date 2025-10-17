import React from 'react'

export default function BodyHeader() {
  return (
    <div className="bparent">
            {/* Vision Card */}
            <div className="bdiv1">
                <h2 style={{
                    fontSize: '48px',
                    color: '#3d2817',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    Vision
                </h2>
                <p style={{
                    fontSize: '20px',
                    color: '#3d2817',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    maxWidth: '500px'
                }}>
                    To empower marginalized communities through sustainable development, fostering positive social change and creating a world where every individual has the opportunity to thrive and contribute to a brighter future.
                </p>
            </div>

            {/* Mission Card */}
            <div className="bdiv2">
                <h2 style={{
                    fontSize: '48px',
                    color: '#3d2817',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    Mission
                </h2>
                <p style={{
                    fontSize: '20px',
                    color: '#3d2817',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    maxWidth: '500px'
                }}>
                    To champion education, healthcare, and environmental sustainability, working hand-in-hand with local communities to develop self-reliant solutions, thereby creating a ripple effect of positive impact globally.
                </p>
            </div>
        </div>
  )
}
