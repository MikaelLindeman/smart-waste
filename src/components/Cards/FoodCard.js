import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Annonser() {
  const url = ("http://localhost:8080/annonser")
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

      <h1>
        {annonser.map(function(annons) {
          return <div><FoodCard mat={annons.mat} 
          allerg={annons.allerg}
          info={annons.info} />
          </div>
        })}
      </h1>
    </div>
  )
}
function FoodCard(props) {
  return <p>{props.mat} + {props.allerg} + {props.info}. </p>
}
export default Annonser