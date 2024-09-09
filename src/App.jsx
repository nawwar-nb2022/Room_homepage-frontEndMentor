import { useState } from 'react'

import Angle_right from "./assets/icons/Angle_right"
import Angle_left from "./assets/icons/Angle_left"
import Arrow from "./assets/icons/Arrow"
import Close from "./assets/icons/Close"
import Humberger from "./assets/icons/Humberger"
import Logo from "./assets/icons/Logo"

import hero1 from "./assets/images/hero1.jpg"
import hero2 from "./assets/images/hero2.jpg"
import hero3 from "./assets/images/hero3.jpg"

import mob_hero1 from "./assets/images/mobile-hero1.jpg"
import mob_hero2 from "./assets/images/mobile-hero2.jpg"
import mob_hero3 from "./assets/images/mobile-hero3.jpg"

import darkAbout from "./assets/images/about-dark.jpg"
import lightAbout from "./assets/images/about-light.jpg"


import "./App.css"
function App() {
  const [data , setData ] = useState([
    {
      title : "  Discover innovative ways to decorate",
      desc : `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`,
      image : hero1,
      image_mob : mob_hero1,
    },
    {
      title : "We are available all across the globe",
      desc : `  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
      image : hero2,
      image_mob : mob_hero2
    },
    {
      title :"Manufactured with the best materials",
      desc  : `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
      image : hero3,
      image_mob : mob_hero3
    }
  ])

  const [slider , setSlider] = useState(0)
  const [showTab  , setShowTab] = useState(false)

  const incSlider = ()=>{
    if(slider >= data.length -1){
      setSlider(0)
    }else{
      setSlider(slider +1 )
    }
  }

  const decSlider = ()=>{
    if(slider == 0){
      setSlider(data.length - 1 )
    }else{
      setSlider(slider - 1)
    }
  }
  return (
      <main>
          <section className="top_section_container"> 
              
              <div className="navigationSection">
                
                  <div className="mobile icon"
                    onClick={()=>setShowTab(!showTab)}
                  >
                      <Humberger/>
                  </div>

                  <div className="logo">
                      <Logo/>
                  </div>

                  <div className={`desktop   ${showTab && "show"}` }>
                    <div className="mobile" onClick={()=>setShowTab(false)}>
                      <span className="right"></span>
                      <span className="left"></span>
                    </div>
                    <div className="tabs">
                        <a href="/"  onClick={()=>setShowTab(false)}>home</a> 
                        <a href="/"  onClick={()=>setShowTab(false)}>shope</a>
                        <a href="/"  onClick={()=>setShowTab(false)}>about</a>
                        <a href="/"  onClick={()=>setShowTab(false)}>contact</a>
                    </div>
                  </div>

              </div>

              {/* left section */}
              <div className="image_container">
                  <img src={data[slider].image} alt={data[slider].title} className="desktop-show"/>
                  <img src={data[slider].image_mob} alt={data[slider].title} className="mobile"/>
              </div>

              {/* right section */}
              <div className="data_container">
                <div className="data">
                    <h3>
                       {data[slider].title}
                    </h3>  
                    <p>
                      {data[slider].desc}
                    </p>
                    <button>
                      <span> SHOP NOW </span>
                      <span> <Arrow/> </span>
                    </button>
                </div>  
              
                <div className="arrowSection">
                  <button className="btn left" onClick={incSlider}> <Angle_left/> </button>
                  <button className="btn right" onClick={incSlider}> <Angle_right/> </button>
                </div>
              </div>


          </section>
          <section className="bottom_section_container"> 

              <div className="image_container">
                  <img src={darkAbout} alt="about"/>
              </div>
              <div className="details">
                <h3 className="title">
                    About our furniture
                </h3>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.                 
                </p>
              </div>
              <div className="image_container">
                  <img src={lightAbout} alt="about"/>
              </div>

          </section>


      </main>
  )
}

export default App
