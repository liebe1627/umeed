import React from 'react'
import BodySlider from './BodySlider'

export default function BodyHeader() {
  return (
    <div className="bparent">
            {/* Vision Card */}
            <div className="bdiv1" >
                <div className='bdiv1overlay'></div>
                <div className='bdiv1content'>
                    <h2 className='bdiv1h'>
                        Mission
                    </h2>
                    <p className='bdiv1p'>
                        To champion education, healthcare, and environmental sustainability, working hand-in-hand with local communities to develop self-reliant solutions, thereby creating a ripple effect of positive impact globally.
                    </p>
                </div>
            </div>

            {/* Mission Card
            <div className="bdiv2">
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
            </div> */}
        </div>
  )
}
