import Axios from "axios"
import React, { useState, useRef } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreateNewForm(props) {
  const [mat, setMat] = useState("")
  const [allerg, setAllerg] = useState("")
  const [file, setFile] = useState("")
  const CreatePhotoField = useRef()

  async function submitHandler(e) {
    e.preventDefault()
    const data = new FormData()
    data.append("photo", file)
    data.append("mat", mat)
    data.append("allerg", allerg)
    setMat("")
    setAllerg("")
    setFile("")
    CreatePhotoField.current.value = ""
    const newPhoto = await Axios.post("/a", data, { headers: { "Content-Type": "multipart/form-data" } })
    props.setAnimals(prev => prev.concat([newPhoto.data]))
  }

  return (

    <form onSubmit={submitHandler}>
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
      <div className="mb-2">
        <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file"  />
      </div>
      <div className="mb-2">
        <input onChange={e => setMat(e.target.value)} value={mat} type="text"  />
      </div>
      <div className="mb-2">
        <input onChange={e => setAllerg(e.target.value)} value={allerg} type="text"  />
      </div>

      <button>Create New Animal!</button>
    </form>
  )
}

export default CreateNewForm