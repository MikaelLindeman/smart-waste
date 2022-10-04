import {Box} from "@mui/system";
import {BottomNavigation} from "@mui/material";
import {BottomNavigationAction} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import Paper from "@mui/material/Paper";


// Navbar
export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

  return (
  <Box >
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    > 
        <BottomNavigationAction href="../Annonser/Annonser.js" label="Annonser" icon={<SearchIcon />} />
        <BottomNavigationAction label="Ny Annons" icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction label="Min Profil" icon={<PersonIcon />} />
    </BottomNavigation>
    </Paper>
  </Box>
  );
}