import React, { useState } from 'react'
import{MdSearch } from 'react-icons/md'

const Search = ({handleSeach}) => {
 
  return (
    <div className='serach'>
    <MdSearch size='1.5em'/>
    <input type='text' onChange={(e)=>handleSeach(e.target.value)} 
    placeholder='Enter to search..'/>
    </div>
  )
}

export default Search