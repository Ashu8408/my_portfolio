import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
  return (
    <div>
     <Navbar/>
     <div className='container'>

     <Hero />

     <Skills />

     <Projects />
     <ContactMe />
    </div></div>
  );
}

export default App;