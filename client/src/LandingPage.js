
import Navigation from './components/Navigation'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div id="landing">
      <div className="landing-nav">
        <div className="landing-logo">
          <span className="logo-text-mid">Spotlights</span>
          <span className="logo-text-small">Talent Bridge</span>
        </div>
        <Navigation />
      </div>
    </div>
  )
}