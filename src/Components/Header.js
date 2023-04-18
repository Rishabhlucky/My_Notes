import React from 'react';
import {MdDarkMode} from 'react-icons/md'
import {BsFillBrightnessHighFill} from 'react-icons/md'

const Header = ({handleMood }) => {
//  <MdDarkMode />:<BsFillBrightnessHighFill />
  
  return (
    <div className='header'>
        <h1>My Notes </h1>
        <button type='button' className='save'
        onClick={()=>handleMood(pre=>!pre)}>Toogle Mood
        </button>
    </div>
  )
}

export default Header;