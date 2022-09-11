
import { useState } from 'react'


import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Login from './components/Login'
import SignUp from "./components/SignUp"
import ArticleBodyUser from './components/ArticleBody_User'
import ArticleBodyEmployer from './components/ArticleBody_Employer'

import './LandingPage.css'
import './App.css';

export default function LandingPage() {

  const [user, setUser] = useState()
  const [body, setBody] = useState('landing')


  return (
    <div id="landing">
      <div className="landing-nav">
        <div className="landing-logo" onClick={() => setBody('landing')}>
          <img className='logo-text' src='img/logo.png' />
        </div>
        <Navigation setBody={setBody} body={body}/>
      </div>
      <div className='yellow-sq-background'></div>



      {body === 'landing' &&
        <div>
          <div className='landing-slogan-container'>
            <div className='slogan-container'>
              <span className='slogan-large'>Finding the right career for you</span>
              <span className='slogan-small'>Finding the right career for you</span>
            </div>
            <img className='landing-img' src='img/landing.webp' />
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
        </div>
      }


      {body === 'login' && <Login setBody={setBody} />}

      {body === 'signup' && <SignUp setBody={setBody} />}

      {body === 'body-user' && <ArticleBodyUser />}

      {body === 'body-employer' && <ArticleBodyEmployer />}

      

      <Footer />
      <img className='bottom-wavy' src='img/bottomNav.png' />
    </div>
  )
}