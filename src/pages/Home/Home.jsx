import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

export const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className='banner-img' />
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img' />
                <p>Discovering his ties to a secret ancient order, a yong man living modern istanbul embarks on aquest to save the city from an immortal enemy</p>
                <div className="hero-btns">
                    <button className='btn'><img  src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
                </div>
            <TitleCards/>
            </div>
        </div>
        <div className="more-cards"><br></br> <br></br>
        <TitleCards title={"Blockbuster movies"} category={"top_rated"} /> 
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
        </div>
        <Footer/>
    </div>
  )
}
