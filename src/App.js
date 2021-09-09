import React, { useRef, useEffect } from 'react';
import {TweenMax, TimelineLite, Power3} from 'gsap';

// assets
import arrow from './img/arrow-right.svg'
import './App.css'
import boy from './img/men.webp'
import girl from './img/women.webp'

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);


  let tl = new TimelineLite({delay: .8});

  useEffect(() => {
  // image variable
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

  // content variable
     const headlineFirst = content.children[0].children[0];
     const headlineSecond = headlineFirst.nextSibling;
     const headlineThird =  headlineSecond.nextSibling;

     const contentP = content.children[1];
     const contentButton = content.children[2];
     
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    // images animation
    tl.from(girlImage, 1.2, {y: 1200, ease: Power3.easeOut}, 'Start')
      .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
      .from(boyImage, 1.2, {y: 1200, ease: Power3.easeOut}, .2)
      .from(boyImage.lastElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    // content animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])


  return (
    <div className="hero" ref={ el => app = el }>
      <div className="header">
        <div className="container">
          <div className="title-brand">
            <h2>H<b>eal</b>tly.</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={ el => content = el }>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                  Melepaskan beban dari
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                  penyakit yg disebabkan 
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Dengan perilaku</div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <div className="btn-arrow">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow-right" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={ el => images = el }>
              <div className="hero-images girl">
                <img src={girl} alt="girl" />
              </div>
              <div className="hero-images boy">
                <img src={boy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
