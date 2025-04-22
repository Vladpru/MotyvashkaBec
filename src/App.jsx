import './index.css';
import { useRef } from 'react';

import { Header } from './components/Header'
import { About } from './components/About'
import { Why } from './components/WhyBEC'
import { Skills } from './components/Skills'
import { Answers } from './components/Answers'


function App() {

  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const skillsRef = useRef(null);
  const answersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={topRef}>
        <Header scrollToSection={scrollToSection} refs={{ aboutRef, whyRef, skillsRef, answersRef, topRef }} />
      </div>
      <About ref={aboutRef} />
      <Why ref={whyRef} />
      <Skills ref={skillsRef} />
      <Answers ref={answersRef} />
    </>
  )
}

export default App
