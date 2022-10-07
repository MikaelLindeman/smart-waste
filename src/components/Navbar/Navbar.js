import {Box} from "@mui/system";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";




export default function SimpleBottomNavigation() {

    const pathname = window.location.pathname;
    const [value, setValue] = useState(pathname)
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }


  return (
  <Box>
      <BottomNavigation sx= {{ position: 'fixed', bottom: 0, left: 0, right: 0 }}elevation={3}
      showLabels
      value={value}
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
  </Box>
  );
}