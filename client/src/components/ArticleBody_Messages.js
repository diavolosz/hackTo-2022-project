import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCalendar } from '@fortawesome/free-regular-svg-icons'
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
          <span className='chat-mentor'>{each.userid}</span>
          <span className='chat-message'>{each.message}</span>
        </div>
      )
    } else {
      return (
        <div className='chat-block chat-block-right'>
          <span className='chat-mentor'>{each.userid}</span>
          <span className='chat-message'>{each.message}</span>
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
            <div className='chat-history-container'>
              <div>
                {chatHistory}
              </div>
              <div className='messagebox'>
                <textarea cols={45} rows={4} />
                <div className='messagebox-send'><span>send</span></div>
              </div>
            </div>
          }
        </div>


      </div>
    </div>
  )
}