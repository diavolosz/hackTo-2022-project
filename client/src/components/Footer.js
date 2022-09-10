import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faSlack } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="block-L block">

        <div className="media">
          <span className='block-title'>FOLLOW US</span>
          <div className="media-icons-container">
            <FontAwesomeIcon className='media-icon' icon={faFacebook} />
            <FontAwesomeIcon className='media-icon' icon={faLinkedin} />
            <FontAwesomeIcon className='media-icon' icon={faSlack} />
            <FontAwesomeIcon className='media-icon' icon={faTwitter} />
          </div>
        </div>

        <div className="information">
          <span className='block-title'>INFORMATION</span>
          <div className="information-items">
            <div>
              <span>About Spotlight app</span>
              <span>We are hiring!</span>
              <span>Get in Touch</span>
            </div>
            <div>
              <span>Privacy Policy</span>
              <span>Things We Like</span>
              <span>Resources</span>
            </div>
            <div>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

      </div>

      <div className="block-R block">

        <div className="media">
          <span className='block-title'>FOLLOW US</span>
          <span className='block-content'>news@spotlight.com</span>
        </div>


        <div className="contact-form">
          <span className='block-title'>KEEP IN TOUCH</span>
          <form>
            <div className='contact-form-entry'>
              <input className='short-fill' placeholder='Your Name' type='text' />
              <input className='short-fill' placeholder='E-mail' type='email' />
            </div>
            <div>
              <textarea className='message-input' placeholder='Leave your message' rows='3' cols='40'/>
              <input className='contact-submit-buttom' value='SEND' type='submit' />
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}