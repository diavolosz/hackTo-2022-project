
import '../styles/Navigation.css'

export default function Navigation() {
  return (
    <div className="nav-container">
      <div className="nav-item-container">
        <span className='nav-item'>How it works</span>
        <div className="dot"></div>
        <span className='nav-item'>Who we are</span>
        <div className="dot"></div>
        <span className='nav-item'>Contact us</span>
      </div>
      <span className="signup-button">Sign In</span>
    </div>
  )
}