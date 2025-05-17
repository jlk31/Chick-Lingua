import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>{heroData.text1}</h1>
        <h2>{heroData.text2}</h2>
      </div>
      <div className="hero-explore">
        <p>Want to start learning?</p>
        <img
        className="hero-explore-arrow"
        src={arrow_btn}
        alt=""
        onClick={() => setHeroCount((prev) => (prev + 1) % 3)}
      />
      </div>

      <div className="hero-dot-play">

        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount === 0?'hero-dot orange': 'hero-dot'}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount === 1?'hero-dot orange': 'hero-dot'}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount === 2?'hero-dot orange': 'hero-dot'}></li>
        </ul>

        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
          <p>Want to see where you could be in the future?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
