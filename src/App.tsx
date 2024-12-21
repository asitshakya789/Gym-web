import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ExerciseSection from './components/Exercise/ExerciseSection';
import Membership from './components/Membership';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <ExerciseSection />
      <Membership />
      <Schedule />
      <Contact />
    </div>
  );
}

export default App;