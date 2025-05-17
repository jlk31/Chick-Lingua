const App = () => {
  let heroData = [
    {text1:"Master German", text2:"the fun way"},
    {text1:"Turn German", text2:"into a game"},
    {text1:"Language learning", text2:"that doesnt feel like homework"},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
