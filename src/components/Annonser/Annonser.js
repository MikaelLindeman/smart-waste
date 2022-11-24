import { Search } from '@mui/icons-material'
import React from 'react'
import FoodCard from '../Cards/FoodCard'
import {styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Annonser() {
  //The Annons page and search bar.
  return (
    <div className='annonserPage'>
      <div className='topper'>
        <input type="text"
        class="search-bar"
        placeholder='Sök...'
        />
        <IconButton>
            <SearchIcon/>
        </IconButton>
      </div>
          <h1 className='annonser-text'>Vad är du sugen på?</h1>
          <div className="annonser-cards">
          <div className='foodCard'>
            <FoodCard />
          </div>
          </div>
    </div>
  )
}
export default Annonser