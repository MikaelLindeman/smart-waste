import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Nyannons() {
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
      <TextField required className='textField' id="outlined-basic" label="Maträtt" variant="outlined" />
      <TextField required className='textField'id="outlined-basic" label="Allergener" variant="outlined" />
      <TextField required className='textField'id="outlined-basic" label="Övrig info" variant="outlined" />

</Box>
    </div>
  )
}

export default Nyannons