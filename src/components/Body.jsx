import React from 'react';
import BodyHeader from './BodyHeader';
import BodySlider from './BodySlider';
export default function Body() {
    return (
        <div>
            <BodyHeader />
            <BodySlider />
            {/* <hr style={{width:'95%', color:'#ffd43b'}}/> */}
        </div>
    );
}