import {Box} from "@mui/system";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'


// Navbar
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

  return (
  <Box >
    <BottomNavigation sx= {{ width: '100%', position: 'fixed', bottom: 0 }}
    
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    > 
        <BottomNavigationAction href="../Navbar/Navbar.js" label="Annonser" icon={<SearchIcon />} />
        <BottomNavigationAction label="Ny Annons" icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction label="Min Profil" icon={<PersonIcon />} />
    </BottomNavigation>
  </Box>
  );
}