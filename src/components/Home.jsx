import React from 'react'
import Header from './Header'
import Slider from './Slider'

export default function Home() {
    return (
        <div>
            <div className='stripes'></div>
            <div className='home'>
                <div className="content">
                    <Header />
                    <Slider />
                </div>
            </div>
        </div>
    )
}
