import React from 'react'
import logo from '../logo.svg'

export default function Header({ scrollToSection, refs }) {
    return (
        <div class="hparent1">
            <div class="hparent2">
                <div class="hdiv1"><img src = {logo}/></div>
                <div class="hdiv2">Umeed- The Hope For Living</div>
                <div class="hdiv3" onClick={() => scrollToSection(refs.achievementsRef)} style={{ cursor: 'pointer' }}>Achivements</div>
                <div class="hdiv4" onClick={() => scrollToSection(refs.ourWorkRef)} style={{ cursor: 'pointer' }}>Our Work</div>
                <div class="hdiv5" onClick={() => scrollToSection(refs.goalsRef)} style={{ cursor: 'pointer' }}>Goals</div>
            </div>
        </div>
    )
}
