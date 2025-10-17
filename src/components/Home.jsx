import React from 'react'
import Header from './Header'
import Slider from './Slider'

export default function Home({ scrollToSection, refs }) {
    return (
        <div>
            <div className='stripes'></div>
            <div className='home'>
                <div className="content">
                    <Header scrollToSection = {scrollToSection} refs = {refs}/>
                    <Slider />
                </div>
            </div>
        </div>
    )
}
