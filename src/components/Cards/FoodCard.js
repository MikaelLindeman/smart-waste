import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Annonser() {
  const [annonser, setAnnonser] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/annonser").then((response) => {
      setAnnonser(response.data)
    })
      // Might need to download
      // https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US
      // As a plugin to view this file. 
    
  }, [])

  return (

    <div>
      <p className='foodCard'>
        {annonser.map(function(annons) {
          return <div><FoodCard mat={annons.mat} 
          allerg={annons.allerg}
          info={annons.info} />
          </div>
        })}
      </p>
    </div>
  )
}
function FoodCard(props) {
  return <>
      <div className='cardContainer'>
        <Card sx={{ minWidth: 245, maxWidth: 245, minHeight: 250, maxHeight: 250, }} >
        <CardMedia
        component="img"
        height="120"
        width="244"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.mat}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.info}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Se mer</Button>
        </CardActions>
      </Card>
    </div>
    {/* {props.mat} + {props.allerg} + {props.info}.  */}
    </>
}
export default Annonser