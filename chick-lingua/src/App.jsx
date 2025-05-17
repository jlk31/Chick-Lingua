import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import image1 from './assets/image1.png'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const About = () => (
  <div className="about-background">
    About Page
  </div>
);

const App = () => {
  let heroData = [
    {text1:"Master German", text2:"the fun way"},
    {text1:"Turn German", text2:"into a game"},
    {text1:"Language learning", text2:"that doesnt feel like homework"},
  ]
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 2000);
    return () => clearInterval(interval);
}, []);

  const [heroCount, setHeroCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
              <Background playStatus={playStatus} heroCount={heroCount} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App
