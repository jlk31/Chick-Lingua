import React, { useState } from 'react';
import Background from './components/Background/Background';
import image1 from './assets/image1.png'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [playStatus, setPlayStatus] = useState(true);
  const [heroCount, setHeroCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App
