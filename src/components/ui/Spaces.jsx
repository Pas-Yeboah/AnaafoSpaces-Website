import React from 'react'
import InfoCard from './InfoCard'

const Spaces = () => {
  return (
    <div className='classy mt-20 bg-black text-white'>
        <h1 className='font-bold text-3xl py-15 text-white text-center'>
        Bring your ideas to life. Discover  a space <br />designed for creators to build,<br /> record, and thrive.
        </h1>
        <div className='grid grid-cols-3 gap-15 px-10'>
  <InfoCard  imgSrc="/bc_photo.jpg" heading="EventSpaces" subtext="From workshops to celebrations,
         our flexible spaces are open to
         all—built to bring people together across Accra and beyond."/>
  <InfoCard imgSrc="/coworkingspace.jpg" heading="Co-working space" subtext="A creative hub in Accra offering workspaces, event venues, podcast and music studios — built to inspire, connect, and create."/>
  <InfoCard imgSrc="/podcast studio.jpg" heading="Podcast studio" subtext="Step into a  space
         built for storytellers. Our studio is open  for
         recording, producing, and sharing your voice with the world."/>
  <InfoCard imgSrc="/musicstudio.jpg" heading="Music Studio" subtext="A creative space for artists,
         producers, and sound explorers. Open to Accra and beyond, our studio is designed for recording,
          mixing, and bringing music to life.

"/>
  <InfoCard imgSrc="/businessmeeting.jpg" heading="Meeting" subtext=" Designed for focus and flow — our meeting rooms offer a professional setting for teams, clients, and ideas to connect."/>
  <InfoCard imgSrc="/teams.jpg" heading="Team Collab paces" subtext="Built for brainstorming, co-creation, and getting things done — our spaces empower teams to connect, innovate, and move ideas forward."/>
        
        </div>
        
    </div>
    
  )
}

export default Spaces