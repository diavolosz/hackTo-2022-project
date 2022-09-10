
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div id="landing">
      <div className="landing-nav">
        <div className="landing-logo">
          {/* <span className="logo-text-mid">Spotlights</span>
          <span className="logo-text-small">Talent Bridge</span> */}
          <img className='logo-text' src='img/logo.png' />
        </div>
        <Navigation />
      </div>



      <div className='landing-slogan-container'>
        <div className='slogan-container'>
          <span className='slogan-large'>Finding the right career for you</span>
          <span className='slogan-small'>Finding the right career for you</span>
        </div>
        <img className='landing-img' src='img/landing.webp' />
        <div className='yellow-sq-background'></div>
      </div>

      <div className='landing-redirect-buttons-container'>

        <div className='button-block'>
          <div className='redirect-buttons'>
            <span>Apply</span>
          </div>
          <div className='redirect-description'>Find jobs. Learn skills. Find mentors.</div>
        </div>

        <div className='button-block'>
          <div className='redirect-buttons'>
            <span>Recruit</span>
          </div>
          <div className='redirect-description'>Find prospects based on an array of skills.</div>
        </div>

        <div className='button-block'>
          <div className='redirect-buttons'>
            <span>Connect</span>
          </div>
          <div className='redirect-description'>Bridge the gap between employers and job hunters.</div>
        </div>
      </div>




      <Footer />

    </div>
  )
}