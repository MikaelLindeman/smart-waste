import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios  from 'axios';
import {useState} from 'react';


function Nyannons() {

   
    const [mat, setMat] = useState("")
    const [allerg, setAllerg] = useState("")
    const [info, setInfo] = useState("")

    //When pressing submit posts the information to Annonser
  const createFood = () => {
    Axios.post("http://localhost:8080/newFood", {
      mat: mat, 
      allerg: allerg, 
      info: info
    }).then((response) => {
      if (mat == "", allerg == "", info == "") {
        alert("Vänligen fyll i alla textfält.")
      } else {
      alert("Mat tillagd");
      }
    })

    
  }


  return (
    <div className='nyAnnonsPage'>
      <h1 className='nyAnnons'>Ny annons!</h1>
      <Box
      className='textContainer'
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required className='textField' id="outlined-basic" label="Maträtt" variant="outlined" 
      onChange={(event) => {
        setMat(event.target.value);
      }} />
      <TextField required className='textField'id="outlined-basic" label="Allergener" variant="outlined"
      onChange={(event) => {
        setAllerg(event.target.value);
      }}  />
      <TextField required className='textField'id="outlined-basic" label="Övrig info" variant="outlined" 
      onChange={(event) => {
        setInfo(event.target.value);
      }} />
      <Button className='btn-submit' onClick={createFood} variant="contained" color="success">Ny Annons</Button>

</Box>
    </div>
  )
}

export default Nyannons