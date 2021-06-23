import React from "react";
import Button from '@material-ui/core/Button'
import {AppBar, Conteiner, ToolBar, IconButton, Typography, Box} from '@material-ui/core'
import  MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from'@material-ui/core/styles';
import { func } from "prop-types";


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}))


function App() {
    const  classes = useStyles();
    return (
        <AppBar position="fixed"> 
        <Conteiner fixed>
            <ToolBar>
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
                    <Button color="inherit" variant="outlined">Sign in</Button>
            </ToolBar>
        </Conteiner>
        </AppBar>
    );
}