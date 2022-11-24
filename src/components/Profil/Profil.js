import React from 'react'
import bgpic from '../../assets/Images/ellipse.svg'
import profilePic from '../../assets/Images/profile-pic.svg'
import meny1 from '../../assets/Images/meny1.svg'
import meny2 from '../../assets/Images/meny2.svg'
import meny3 from '../../assets/Images/meny3.svg'

function Profil() {

  //Profile page
  return (
    <div>
        <div className='profil-top'>
          <div className='bg-pic'>
            <img src={bgpic} alt='green background'/>
          </div>
          <div className='profil-pic'>
            <img src={profilePic} alt='picture of a guy' />
          </div>
        </div>
        <div className='profil-middle'>
          <img src={meny1} className='meny-pic' />
          <img src={meny2} className='meny-pic' />
          <img src={meny3} className='meny-pic' />
        </div>
    </div>
  )
}

export default Profil