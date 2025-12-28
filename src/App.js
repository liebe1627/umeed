import './App.css';
import './static/css/public.css'
import Home from './components/Home';
import Body from './components/Body';
import { useRef } from 'react';

function App() {

  const achievementsRef = useRef(null);
  const ourWorkRef = useRef(null);
  const homeRef = useRef(null);
  const goalsRef = useRef(null);

  const NAV_HEIGHT = 140; // adjust to your header height

  const scrollToSection = (ref, duration = 1500) => {
    if (!ref.current) return;

    const targetPosition =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset -
      NAV_HEIGHT;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };



  return (
    <div className="App parent">
      <Home scrollToSection={scrollToSection} refs={{ achievementsRef, ourWorkRef, goalsRef, homeRef}} />
      <Body refs={{ achievementsRef, ourWorkRef, goalsRef, homeRef}} />
    </div>
  );
}

export default App;
