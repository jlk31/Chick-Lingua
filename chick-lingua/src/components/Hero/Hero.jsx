import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <img
      src={arrow_btn}
      alt=""
      onClick={() => setHeroCount((prev) => (prev + 1) % 3)}
      style={{ cursor: 'pointer' }}
      />
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount === 0?'hero-dot orange': 'hero-dot'}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount === 1?'hero-dot orange': 'hero-dot'}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount === 2?'hero-dot orange': 'hero-dot'}></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
