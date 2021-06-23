import React from "react";
//import Button from '@material-ui/core/Button'
import {Typography, BottomNavigationAction} from '@material-ui/core'
   

import { BottomNavigation } from "@material-ui/core";
//import BottomNavigationAction from  "@material-ui/core/BottomNavigationAction";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import useStyles from "./usestyles";


export default function FooterNew()
{
    const  classes = useStyles();
    const [value, setValue] = React.useState("recent")

    const handleChange = (event, newValue) =>{
  setValue(newValue);
}

  return (
<>
<Typography variant="h6" align="center" gutterBottom>Footer new</Typography>
<BottomNavigation
value={value}
onChange={handleChange}
className={classes.root}
>
  <BottomNavigationAction
    label="Recents"
    value="recents"
    icon={<RestoreIcon/>}
    >
  </BottomNavigationAction>

  <BottomNavigationAction
    label="Favorites"
    value="favorites"
    icon={<FavoriteIcon/>}
    >
  </BottomNavigationAction>

  <BottomNavigationAction
    label="Nearby"
    value="nearby"
    icon={<LocationOnIcon/>}
    >
  </BottomNavigationAction> 

  <BottomNavigationAction
    label="Folder"
    value="folder"
    icon={<FolderIcon/>}
    >
  </BottomNavigationAction>
</BottomNavigation>
<Typography align="center" color ="textSecondary" component="p"
variant="subtitle1">
  "LetsRide" application. Version 1.02b
</Typography>            
</>
  );
}
