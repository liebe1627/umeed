import './App.css';
import './static/css/public.css'
import Home from './components/Home';
import Body from './components/Body';
import { useRef } from 'react';

function App() {
  
  const achievementsRef = useRef(null);
  const ourWorkRef = useRef(null);
  const goalsRef = useRef(null);

  const scrollToSection = (ref, duration = 1500) => {
    if (!ref.current) return;

    const targetPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };


  return (
    <div className="App parent">
      <Home scrollToSection={scrollToSection} refs={{ achievementsRef, ourWorkRef, goalsRef }} />
      <Body refs={{ achievementsRef, ourWorkRef, goalsRef }}/>
    </div>
  );
}

export default App;
