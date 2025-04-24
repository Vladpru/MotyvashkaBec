import Lenis from '@studio-freight/lenis'
import './index.css';
import { useRef, useEffect } from 'react';

import { Header } from './components/Header'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Why } from './components/WhyBEC'
import { Skills } from './components/Skills'
import { Answers } from './components/Answers'

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };

    requestAnimationFrame(raf);
  }, []); // Плавний scroll

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
      <div className='topref' ref={topRef} />
      <Header scrollToSection={scrollToSection} refs={{ aboutRef, whyRef, skillsRef, answersRef, topRef }} />
      <Welcome />
      <About ref={aboutRef} />
      <Why ref={whyRef} />
      <Skills ref={skillsRef} />
      <Answers ref={answersRef} />
    </>
  )
}

export default App
