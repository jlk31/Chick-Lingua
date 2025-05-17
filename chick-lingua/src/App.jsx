import React, { useState } from 'react';
import Background from './components/Background/Background';
import image1 from './assets/image1.png'

const App = () => {
  const [playStatus, setPlayStatus] = useState(true);
  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <h1 className="chicklingua-title">ChickLingua</h1>
    </div>
  );
};

export default App
