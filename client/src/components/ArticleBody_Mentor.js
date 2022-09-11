import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faCalendar } from '@fortawesome/free-regular-svg-icons'

import '../styles/ArticleBody_Employer.css'

export default function ArticleBodyMentor() {

  const data = {
    user: 'Amanda(Boss)',
    jobs: [
      {
        job: 'Factory line worker',
        location: 'Markham, ON',
        skill1: 'Convensational Englush',
        skill2: 'Factory Line Skills',
        description: 'At the Markham Randstad office, we’re committed to tackling the challenges that come with career-searching. We’re dedicated to finding you the job opportunity that you’ve been looking for. Please check out www.randstad.ca for all the roles currently open at Randstad!'
      },
      {
        job: 'Dollarama worker',
        location: 'Markham, ON',
        skill1: 'Convensational Englush',
        skill2: 'Customer Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fringilla mollis purus ut fermentum. Curabitur et est a neque vulputate commodo. Praesent nec turpis malesuada tortor congue tempor eu eu ligula. Curabitur sit amet efficitur mauris, quis semper dolor. Quisque et tempus ligula, consequat fringilla orci. Nulla ultrices lorem nec lorem accumsan malesuada. '
      },
      {
        job: 'Elderly home assistant',
        location: 'Markham, ON',
        skill1: 'Convensational Chinese',
        skill2: 'Nursing techniques',
        description: 'Mauris ornare, ligula non ullamcorper finibus, quam neque tempor libero, eget eleifend nunc mauris vitae risus. Donec congue mauris id massa ornare, at imperdiet justo vestibulum. Donec sapien lectus, feugiat non hendrerit vitae, porta at massa. Maecenas bibendum eu neque vitae molestie. Nam finibus bibendum semper. Ut quis dolor tempus, condimentum enim ut, aliquam ex'
      },
      {
        job: 'Factory line worker',
        location: 'Markham, ON',
        skill1: 'Convensational Englush',
        skill2: 'Factory Line Skills',
        description: 'At the Markham Randstad office, we’re committed to tackling the challenges that come with career-searching. We’re dedicated to finding you the job opportunity that you’ve been looking for. Please check out www.randstad.ca for all the roles currently open at Randstad!'
      },
    ],
    Mentees: [
      { name: 'Apple', skill1: 'food engineering', skill2: 'something some skills' },
      { name: 'banana', skill1: 'web engineering', skill2: 'something some skills' },
      { name: 'pear', skill1: 'chemical engineering', skill2: 'something some skills' },
      { name: 'Apple', skill1: 'engineering', skill2: 'something some skills' },
      { name: 'banana', skill1: 'computer engineering', skill2: 'something some skills' },
      { name: 'pear', skill1: 'chemical engineering', skill2: 'something some skills' },
    ],
    workshops: [
      'Student-centricity in theory and practice',
      'Motivation and engagement',
      'Using web-based resources and tools',
      'Building Effective Teams',
      'Creating a Results-Driven School',
      'Toward more Effective Instruction ',
    ]
  }

  const [jobDisplay, setJobDisplay] = useState('')
  const [jobDisplayDetails, setJobDisplayDetails] = useState({})

  const handleDisplay = (each) => {
    setJobDisplay('jobDisplay')
    setJobDisplayDetails({
      job: each.job,
      location: each.location,
      skill1: each.skill1,
      skill2: each.skill2,
      description: each.description,
    })
  }

  const resetDisplay = () => {
    setJobDisplay('')
  }

  const Joblist = data.jobs.map((job) => {
    return (
      <div className="job-item-container" onClick={() => handleDisplay(job)}>
        <span className='job-name'>{job.job}</span>
        <div className="job-icon-control">
          <FontAwesomeIcon icon={faEyeSlash} />
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    )
  })



  const Mentorlist = data.Mentees.map((mentee) => {
    return (
      <div className="mentor-container">
        <div className='mentor-inner-wrapper'>
          <div>
            <span className='mentor-name'>{mentee.name}</span>
            <span className='mentor-job'>{mentee.skill1}</span>
            <span className='mentor-job'>{mentee.skill2}</span>
            <div className='request-meeting-button'>
              <span>Accept Meeting</span>
              <FontAwesomeIcon className='accept request-icon' icon={faCheckCircle} />
              <FontAwesomeIcon className='decline request-icon' icon={faCircleXmark} />
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
          <span className='job-for-you'>Avaliable Jobs</span>
          {jobDisplay === '' && Joblist}


          {jobDisplay === 'jobDisplay' &&
            <div className='job-detailed-description' >
              <div className='top-container'>

                <div className='clicked-job-title-control'>
                  <span className='clicked-job-title'>{jobDisplayDetails.job}</span>
                  <div className="job-icon-control">
                    <FontAwesomeIcon icon={faEyeSlash} />
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                </div>

                <div className='clicked-job-location-apply'>
                  <span className='clicked-job-location'>{jobDisplayDetails.location}</span>
                </div>

                <div className='clicked-job-skill-block'>
                  <span className='skill-required'>Skills required</span>
                  <div className='skill-block'>
                    {jobDisplayDetails.skill1}
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  </div>
                  <div className='skill-block'>
                    {jobDisplayDetails.skill2}
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} />
                  </div>
                </div>

              </div>


              <div className='bottom-container'>
                {jobDisplayDetails.description}
              </div>
              <FontAwesomeIcon className='return-button' icon={faCircleXmark} onClick={() => resetDisplay()} />
            </div>}

        </div>

        <div className="resource-container">

          <div className="mentor-queue">
            <p className='mentor-title'>Mentees List</p>
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