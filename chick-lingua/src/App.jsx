import React, { useState } from 'react';
import Background from './components/Background/Background';
import image1 from './assets/image1.png'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Master German", text2:"the fun way"},
    {text1:"Turn German", text2:"into a game"},
    {text1:"Language learning", text2:"that doesnt feel like homework"},
  ]
  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App
