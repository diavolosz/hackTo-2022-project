import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

import '../styles/ArticleBody_Messages.css'

export default function ArticleBodyMessage() {

  const [message, setMessage] = useState()

  const chatData = [
    {
      userid: "binit",
      mentorid: "micheal",
      message: "hi, how are you?",
      timestamp: "1662854308760"
    },
    {
      userid: "micheal",
      mentorid: "binit",
      message: "I am fine, thank you!",
      timestamp: "1662854308760"
    },
    {
      userid: "binit",
      mentorid: "micheal",
      message: "Have you completed workshop",
      timestamp: "1662854308760"
    },
    {
      userid: "micheal",
      mentorid: "binit",
      message: "yes, I aced it",
      timestamp: "1662854308760"
    }
  ]

  const data = [
    {
      user: 'Michael',
      mentor: 'Binit',
      message: 'Hi, Binit, I would like to schedule a meeting...'
    },
    {
      user: 'john',
      mentor: 'Amira Patel',
      message: 'Hi, Amira, I would like to schedule a meeting...'
    },
    {
      user: 'john',
      mentor: 'Rebecca Smith',
      message: 'Hi Rebecca, I would like to connect. Let me know...'
    },
    {
      user: 'john',
      mentor: 'Frank Johnson',
      message: 'Hi, Frank, I would like to schedule a meeting...'
    },
    {
      user: 'john',
      mentor: 'Jamie Ngyuen',
      message: 'Hi, Jamie, I would like to schedule a meeting...'
    },
  ]

  const handleDisplay = () => {
    setMessage(true)

    // axios.get(`http://spotlight-env.eba-pn23zk2p.us-west-1.elasticbeanstalk.com/api/v1/conversation`)
    //   .then((res) => {
    //     console.log(res)
    //   })
  }

  const resetDisplay = () => {
    setMessage('')
  }


  const chatList = data.map((chat) => {
    return (
      <div className='chat-block' onClick={() => handleDisplay()}>
        <span className='chat-mentor'>{chat.mentor}</span>
        <span className='chat-message'>{chat.message}</span>
      </div>
    )
  })

  const chatHistory = chatData.map((each, index) => {
    if (index % 2 !== 0) {
      return (
        <div className='chat-block chat-block-left'>
          {/* <span className='chat-mentor'>{each.userid}</span> */}
          <p className='chat-message'><span>{each.message}</span></p>
          <img className='chat-icon' src='img/iconP.jpg' />
        </div>
      )
    } else {
      return (
        <div className='chat-block chat-block-right'>
          {/* <span className='chat-mentor'>{each.userid}</span> */}
          <img className='chat-icon' src='img/iconP.jpg' />
          <p className='chat-message'><span>{each.message}</span></p>
        </div>
      )
    }
  })






  return (
    <div className="article-body-container">

      <p className='username-display'>Inbox</p>
      <div className='chatList-container'>
        <div className='chatList-wrapper'>
          {chatList}
          {chatList}
        </div>
        <div className='message-wrapper'>
          {message &&
            <div>
              <div className='chat-top'>
                <img className='chat-icon' src='img/iconP.jpg' />
                <p className='chat-mentor-name'>Binit</p>
              </div>

              <div className='chat-history-container'>
                <div>
                  {chatHistory}
                </div>
                <div className='messagebox'>
                  <FontAwesomeIcon className='box-icon' icon={faSmile} />
                  <input className='input-field' placeholder='Write a message...' />
                  {/* <div className='messagebox-send'><span>send</span></div> */}
                  <FontAwesomeIcon className='box-icon' icon={faPaperclip} />
                </div>
              </div>
            </div>


          }
        </div>

      </div>
    </div>
  )
}