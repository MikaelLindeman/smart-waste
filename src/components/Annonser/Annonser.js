import React, { useState, useEffect } from 'react'
import Axios from 'axios'



function Annonser() {
  // const annonser = [
  //  { mat: "potatis",
  //     allerg: "bajs",
  //   info: "mumsigt"
  // }]
  const [annonser, setAnnonser] = useState([])
  
  useEffect(() => {
    async function go() {
      const response = await Axios.get("http://localhost:3005/annonser")
      setAnnonser(response.data)
    }
    go()
  }, [])
  
  return (
    <div>
      <h1>
        Annonser
        {annonser.map(function(annons) {
          return <p><FoodCard mat={annons.mat} allerg={annons.allerg}info={annons.info} /></p>
        })}
      </h1>
    </div>
  )
}
function FoodCard(props) {
  return <p>Jag bakar {props.mat} 
  och är allergisk mot {props.allerg} 
  och tycker det är {props.info}. </p>
}
export default Annonser