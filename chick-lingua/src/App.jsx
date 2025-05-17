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
    <h2 style={{ fontWeight: 'bold', marginBottom: '24px', textAlign: 'left', marginLeft: '40px' }}>
      Free resources <span style={{ fontWeight: 'normal', color: 'white' }}>to that you can use to be on the track to mastering German</span>
    </h2>
    <div className="resource-row">
      <div className="resource-box">
        <div className="resource-title">AQA Specification</div>
        <div className="resource-desc">Use to understand what the examiners want</div>
        <div className="resource-link">Free viewing →</div>
      </div>
      <div className="resource-box">
        <div className="resource-title">Sample assessment materials</div>
        <div className="resource-desc">Directly from AQA</div>
        <div className="resource-link">Free usage →</div>
      </div>
    </div>
    <h2 style={{ fontWeight: 'bold', marginBottom: '24px', textAlign: 'left', marginLeft: '40px', marginTop: '60px' }}>
      Stronger resources <span style={{ fontWeight: 'normal', color: 'white' }}>that will help you nail your exam technique</span>
    </h2>
    <div className="resource-row">
      <div className="resource-box">
        <div className="resource-title">Exam Practice Papers</div>
        <div className="resource-desc">Get a sense of what the exam will be like</div>
        <div className="resource-link">View now →</div>
      </div>
      <div className="resource-box">
        <div className="resource-title">CGP textbook</div>
        <div className="resource-desc">Exam-style questions</div>
        <div className="resource-link"> For £13.50 →</div>
      </div>
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