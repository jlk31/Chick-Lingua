import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const About = () => (
  <div className="about-feature-section">
    <img
      src="./assets/image4.png"
      alt="About visual"
      className="about-feature-image"
    />
    <div className="about-feature-row">
      <div className="about-feature-col">
        <h3>Simplicity in Design</h3>
        <p>
          No flashy logos. No senseless details. Just the world’s most comfortable resources, made naturally and designed practically. It’s that simple.
        </p>
      </div>
      <div className="about-feature-col">
        <h3>Confidence in Comfort</h3>
        <p>
          Trying is believing. Use our platform for 30 days, and if you’re not learning on cloud nine, we’ll take your feedback—no questions asked.
        </p>
      </div>
      <div className="about-feature-col">
        <h3>Made from Nature</h3>
        <p>
          We use nature-inspired methods and materials to help you learn better, avoiding synthetic, ineffective alternatives. We think it’s time to change that.
        </p>
      </div>
    </div>
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
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (idx) => setSelected(idx);

  const handleSubmit = () => {
    if (selected === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-card">
      {showScore ? (
        <div className="quiz-center">
          <h3>Your score: {score} / {quizQuestions.length}</h3>
        </div>
      ) : (
        <>
          <div className="quiz-progress">
            {current + 1} of {quizQuestions.length}
          </div>
          <div className="quiz-question">
            {quizQuestions[current].question}
          </div>
          <div className="quiz-options">
            {quizQuestions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={`quiz-option-btn${selected === idx ? ' selected' : ''}`}
                onClick={() => handleOptionClick(idx)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="quiz-submit-btn"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit
          </button>
          <div className="quiz-score">
            {score} / {quizQuestions.length}
          </div>
        </>
      )}
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