import React,{ forwardRef, useRef } from 'react'
import MemberCard from './MemberCard'
import './TeamMembers.scss'
import { motion, useMotionValue, useTransform   } from "framer-motion"


const members = [
  {
    name: 'Omar Gamal',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Ahmed Nashat',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Shahenda Hamdy',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Omar Mohamed',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Hajar Hesham',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Mohamed Fathy',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
  {
    name: 'Ahmed Yasser',
    img: './images/members/testMember.jpg',
    email: 'o.gamal.abdulzaher@gmai.com',
    linkedin: 'https://www.linkedin.com/in/omarspace/',
    github: 'https://github.com/O-Gamal'
  },
]

export default forwardRef(function TeamTest(props,team) {
  const section = useRef()

  return (
    <section ref={team} className="team-members">
      <div className="team-title">Team</div>
        <div ref={section} className='cards-container'>
          <motion.div
            className="cards" 
            drag="x"
            dragConstraints={section}
            // animate={{x: -3330 + 1000}}
            transition={{ duration: 5.5 }}
          >
            {members.map(member => (
              <MemberCard key={member.name} {...member} />
            ))}
          </motion.div>
        </div>
    </section>
  )
})
