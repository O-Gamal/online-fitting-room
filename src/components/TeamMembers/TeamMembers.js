import React,{ forwardRef, createRef } from 'react'
import MemberCard from './MemberCard'
import './TeamMembers.scss'
import ScrollContainer from "react-indiana-drag-scroll";
console.log(ScrollContainer);

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
  const scrollRef = createRef();

  return (

    <section ref={team} className="team-members">
      <div className="team-title">Team</div>
      <ScrollContainer className="scroll-container" ref={scrollRef} activationDistance={20} >
        <div className="cards">
          {members.map(member => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </ScrollContainer>
    </section>
  )
})
