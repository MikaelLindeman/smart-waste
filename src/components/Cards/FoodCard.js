import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic from '../../assets/Images/logga.svg'

function Annonser() {
  const [annonser, setAnnonser] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/ads").then((response) => {
      setAnnonser(response.data)
    })
      // Might need to download
      // https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US
      // As a plugin to view this file. 
    
  }, [])

  
  //Display the information inside the Food Card
  return (

    <div>
      <p className='foodCard'>
        {annonser.map(function(annons) {
          return <div><FoodCard 
          mat={annons.mat} 
          allerg={annons.allerg}
          info={annons.info}
          _id={annons._id}
         />
          </div>
        })}
      </p>
    </div>
  )
}

function FoodCard(props) {

  //Handle the delete with when you press DELETE
  const handleDelete = (_id) => {
    Axios.delete(`http://localhost:8080/ads/${_id}`)
  }
  return <>
      <div className='cardContainer'>
        <Card sx={{ minWidth: 150, maxWidth: 150, minHeight: 250, maxHeight: 250, }} >
        <CardMedia
        component="img"
        height="100"
        width="150"
        image={pic}
        alt="pic info"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" class="mat-text">
          {props.mat}
        </Typography>
        <p>
        <Typography variant="body2" color="text.secondary" class="info-text">
          {props.info}
        </Typography>
        </p>
        </CardContent>
        <CardActions>
        <Button 
        onClick={() => handleDelete(props._id)}
        size="small" className="btn-se-mer">Delete
        </Button>
        </CardActions>
      </Card>
    </div>
    </>
}
export default Annonser