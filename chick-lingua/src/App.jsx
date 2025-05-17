import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'

const About = () => (
  <div className="about-visual-section">
    <h1 className="about-visual-heading">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sit, incidunt veritatis ab excepturi nobis, cupiditate quos perspiciatis sequi, possimus fuga impedit quas similique at officia sapiente. Aperiam, exercitationem non.
    </h1>
    <div className="about-visual-row">
      <div className="about-visual-box">
        <img src="/icon1.svg" alt="" className="about-visual-img" />
      </div>
      <div className="about-visual-box">
        <img src={image4} alt="" className="about-visual-img" />
      </div>
      <div className="about-visual-box">
        <img src={image5} alt="" className="about-visual-img" />
      </div>
      <div className="about-visual-box dark">
        <img src={image6} alt="" className="about-visual-img" />
      </div>
      <div className="about-visual-box">
        <img src={image7} alt="" className="about-visual-img" />
      </div>
    </div>
    <p className="about-visual-description">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at voluptatibus ab debitis consectetur quis a quidem perspiciatis doloribus, vero explicabo, fugit cupiditate in dolorum cumque accusantium facilis dolores eos.
    </p>
  </div>
);

const Resources = () => (
  <div className="about-background">
    <h2 style={{ fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
      Free resources <span style={{ fontWeight: 'normal', color: 'white' }}>to use throughout your revision.</span>
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
    <h2 style={{ fontWeight: 'bold', marginBottom: '24px', textAlign: 'center', marginTop: '60px' }}>
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

const quizQuestions = [
  {
    question: "What is the German word for 'traffic light?'?",
    options: ["Die ampel", "Anbieten", "Das Angebot", "Traube"],
    answer: 0,
  },
  {
    question: "What is 'to try on clothes' in German?",
    options: ["Bitte", "Anprobieren", "Abend", "Tschüss"],
    answer: 1,
  },
  {
    question: "What is the German word for 'apparatus/appliance/gadget'?",
    options: ["Haus", "Der Apparat", "Auto", "Buch"],
    answer: 1,
  },
  {
    question: "What is 'to tidy up' in German?",
    options: ["Guten Morgen", "Aufräumen", "Guten Tag", "Guten Abend"],
    answer: 1,
  },
  {
    question: "What is German for 'to spend money'?",
    options: ["Stuhl", "Tisch", "Ausgeben", "Fenster"],
    answer: 2,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (idx) => {
    if (idx === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="about-background">
      <h2 style={{ fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
        Quiz
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'white', lineHeight: '1.6' }}>
        {showScore ? (
          <div>
            <h3>Your score: {score} / {quizQuestions.length}</h3>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Question {current + 1}:</strong> {quizQuestions[current].question}
            </div>
            <div>
              {quizQuestions[current].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  style={{
                    display: 'block',
                    margin: '8px 0',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#89CFF0',
                    color: '#222',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

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
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;