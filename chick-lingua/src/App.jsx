import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const About = () => (
  <div className="about-background">
    <div style={{ fontWeight: 'bold', marginBottom: '24px' }}>A bit about us</div>
    <div style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'white', lineHeight: '1.6' }}>
      ChickLingua was created with the user's heart in mind - our goal is to scratch the stereotype that learning a new language is a chore
      and instead make it an engaging and enjoyable experience.
      ChickLingua was primarily designed for students who are studying for a German qualification at the KS4 level,
      but it can also be used by anyone wishing to learn German in their free time too! 
    </div>
  </div>
);

const Resources = () => (
  <div className="about-background">
    <div style={{ fontWeight: 'bold', marginBottom: '24px' }}>Resources</div>
    <div style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'white', lineHeight: '1.6' }}>
      {/* Add your resources content here */}
      This is the Resources page.
    </div>
  </div>
);

const App = () => {
  const heroData = [
    { text1: "Master German", text2: "the fun way" },
    { text1: "Turn German", text2: "into a game" },
    { text1: "Language learning", text2: "that doesnt feel like homework" },
  ];
  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
};

export default App;