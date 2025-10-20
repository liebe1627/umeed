import React from 'react';
import BodyHeader from './BodyHeader';
import BodySlider from './BodySlider';
import BodyFooter from './BodyFooter';
import Achivements from './Achivements';
import OurWork from './OurWork';
export default function Body({ refs }) {
    return (
        <div>
            <BodyHeader />
            <BodySlider />
            <BodyFooter />
            <div ref={refs.achievementsRef}>
                <Achivements />
            </div>
            <div ref={refs.ourWorkRef}>
                <OurWork/>
            </div>
            {/* <hr style={{width:'95%', color:'#ffd43b'}}/> */}
        </div>
    );
}