import { Search } from '@mui/icons-material'
import React from 'react'
import FoodCard from '../Cards/FoodCard'
import {styled } from '@mui/material/styles'

function Annonser() {

  return (
    <div className='annonserPage'>
        <h1 className='annonser'>Vad är du sugen på?</h1>
        <div className='foodCard'><FoodCard /></div>
    </div>
  )
}
export default Annonser