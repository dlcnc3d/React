import React from "react";
import Button from '@material-ui/core/Button'
import {AppBar, Container, Toolbar, IconButton, 
  Typography, Box} from '@material-ui/core'
   

import  MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./usestyles";

import { withScriptjs, Marker, searchbox } from "react-google-maps";



function UpperToolMenu () {
    
    const  classes = useStyles();

    return (

<AppBar position="fixed" > 
        <Container fixed >
            <Toolbar >
                <IconButton edge="start"
                color="inherit" aria-label="menu" className={classes.menuButton}
                >
                    <MenuIcon>
                    </MenuIcon>
                </IconButton>
                <Typography variant="h6" className={classes.title} > LetsRide</Typography>
                <Box mr={3}>
                    <Button color="inherit" variant="outlined">log in</Button>
                </Box>
                    <Button color="prime" variant="contained">Sign in</Button>
            </Toolbar>
        </Container>
</AppBar> 
    )
}

export default UpperToolMenu