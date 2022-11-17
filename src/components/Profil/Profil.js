import React from 'react'
import bgpic from '../../assets/Images/ellipse.svg'
import profilePic from '../../assets/Images/profile-pic.svg'

function Profil() {
  return (
    <div>
        <div className='profil-top'>
          <div className='bg-pic'>
            <img src={bgpic} alt='green background'/>
          </div>
          <div className='profil-pic'>
            <img src={profilePic} />
          </div>
        </div>
    </div>
  )
}

export default Profil