import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../styles/Navigation.css'


export default function Navigation() {

  const [logged, setLogged] = useState(false)

  return (
    <div className="nav-container">
      <div className="nav-item-container">
        <span className='nav-item'>How it works</span>
        <div className="dot"></div>
        <span className='nav-item'>Who we are</span>
        <div className="dot"></div>
        <span className='nav-item'>Contact us</span>
      </div>

      {logged === false &&
        <div className='button-container'>
          <span className="signup-button">Sign In</span>
        </div>
      }


      {logged === true &&
        <div className='nav-icon-container'>
          <FontAwesomeIcon className='nav-icons' icon={faEnvelope} />
          <FontAwesomeIcon className='nav-icons' icon={faCircleUser} />
        </div>}

      <div>
        <select id='language-select'>
          <option value='english'>EN</option>
          <option value='chinese'>CH</option>
        </select>
      </div>
    </div>
  )
}