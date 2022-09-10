import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCalendar } from '@fortawesome/free-regular-svg-icons'

import '../styles/ArticleBody_User.css'

export default function ArticleBodyUser() {

  const data = {
    user: 'Cindy',
    jobs: [
      'Factory line worker',
      'Taxi driver',
      'Restaurant chef',
      'Janitor',
      'Software Engineer',
      'Factory line worker',
      'Taxi driver',
      'Restaurant chef',
      'Janitor',
      'Software Engineer',
    ],
    mentors: [
      { name: 'Apple', job: 'food engineering' },
      { name: 'banana', job: 'web engineering' },
      { name: 'pear', job: 'chemical engineering' },
      { name: 'Apple', job: 'engineering' },
      { name: 'banana', job: 'computer engineering' },
      { name: 'pear', job: 'chemical engineering' },
    ],
    workshops: [
      'Apple',
      'banana',
      'pear',
      'Apple',
      'banana',
      'pear',
    ]
  }


  const Joblist = data.jobs.map((job) => {
    return (
      <div className="job-item-container">
        <span className='job-name'>{job}</span>
        <div className="job-icon-control">
          <FontAwesomeIcon icon={faEyeSlash} />
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    )
  })


  const Mentorlist = data.mentors.map((mentor) => {
    return (
      <div className="mentor-container">
        <div className='mentor-inner-wrapper'>
          <div>
            <span className='mentor-name'>{mentor.name}</span>
            <span className='mentor-job'>{mentor.job}</span>
            <div className='request-meeting-button'>
              <span>Request a meeting</span>
              <FontAwesomeIcon className='request-icon' icon={faCalendar} />
            </div>
          </div>
          <img src='img/mentor.jpg' />
        </div>
      </div>
    )
  })

  const Workshoplist = data.workshops.map((workshop) => {
    return (
      <div className="workshop-item-container">
        <span className='workshop-name'>{workshop}</span>
        <div className="workshop-icon-control">
          <FontAwesomeIcon className='request-icon' icon={faEyeSlash} />
          <FontAwesomeIcon className='request-icon' icon={faBookmark} />
        </div>
      </div>
    )
  })

  return (
    <div className="article-body-container">
      <div className="username-display">Hey, {data.user}</div>
      <div className='content-container'>

        <div className="inner-list">
          <span>Jobs for you</span>
          {Joblist}
        </div>

        <div className="resource-container">

          <div className="mentor-queue">
            <p className='mentor-title'>Mentors</p>
            {Mentorlist}
          </div>

          <div className="mentor-queue">
            <p className='mentor-title'>WorkShops</p>
            {Workshoplist}
          </div>

        </div>
      </div>
    </div>
  )
}