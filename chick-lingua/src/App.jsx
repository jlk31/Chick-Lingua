import React, { useState } from 'react';
import Background from './components/Background/Background';
import image1 from './assets/image1.png'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  let heroData = [
    {text1:"Master German", text2:"the fun way"},
    {text1:"Turn German", text2:"into a game"},
    {text1:"Language learning", text2:"that doesnt feel like homework"},
  ]
  const [playStatus, setPlayStatus] = useState(true);
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
      <div style={{ position: 'relative', zIndex: 2, color: 'white', marginLeft: '40px', marginTop: '100px', fontFamily: 'Poppins, sans-serif' }}>
        <h1>{heroData[heroCount].text1}</h1>
        <h2>{heroData[heroCount].text2}</h2>
      </div>
    </div>
  );
};

export default App
