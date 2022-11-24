import {Box} from "@mui/system";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import Paper from '@mui/material/Paper';



export default function SimpleBottomNavigation() {

    //Changes value when pressing new pages
    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname)
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }


  return (

    //Bottom navigation with 3 pages
  <Box>
    <Paper>
      <BottomNavigation sx= {{ position: 'fixed', bottom: 0, left: 0, right: 0, }}elevation={3}
      showLabels
      value={value}
      className="navbar-box"
      onChange={handleChange}> 
        <BottomNavigationAction 
        component={Link}
        to ="/"
        label="Annonser"
        value= 'Annonser' 
        icon={<SearchIcon />} 
        />
        <BottomNavigationAction
        component={Link}
        to ="/Nyannons" 
        label="Ny Annons" 
        icon={<AddCircleOutlineIcon />} 
        />
        <BottomNavigationAction 
        component={Link}
        to="/Profil"
        label="Min Profil" 
        icon={<PersonIcon />} 
        />
    </BottomNavigation>
    </Paper>
  </Box>
  );
}