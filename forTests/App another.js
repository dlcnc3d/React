import React from "react";
import Button from '@material-ui/core/Button'
import {AppBar, Container, Toolbar, IconButton, 
  Typography, Box, Paper, Grid, Card, CardMedia,
   CardContent, CardActions, BottomNavigationAction} from '@material-ui/core'
   
import  LayerIcon from '@material-ui/icons/Layers'
import  PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import  MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from'@material-ui/core/styles';
import { BottomNavigation } from "@material-ui/core";
//import BottomNavigationAction from  "@material-ui/core/BottomNavigationAction";

import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";



//import { func } from "prop-types";


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      vbackgroundPosition: "center"
    },
    overlay: {
      position: "absolute",
      top: 0,
      boyoom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent:{
      position: "relative",
      padding: theme.spacing(6),
      marginTop: theme.spacing(8)
    },
    cardMedia: {
      paddingTop: "56.25%"
    },
    CardContent: {
      flexGrow: 1
    },
    cardgrid: {
      marginTop: theme.spacing(4)
    }
}))


const cards =[1,2,3,4,5,6,7,8,9]

export default function App() {

    const  classes = useStyles();
    const [value, setValue] = React.useState("recent")

const handleChange = (event, newValue) =>{
  setValue(newValue);
}

    return (
      <>
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
        
        <main>
          <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}
          >
            <Container fixed >
              <div className={classes.overlay}> </div>
              <Grid container>
                <Grid item md={6}>


                  <div className={classes.mainFeaturesPostContent}>
                    <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                    >
                      Test TEXT ETEXT
                    </Typography>                    
                    <Typography

                    component="h5"
                    color="inherit"
                    paragraph
                    >
                      Test text
                      132132121
                      32132132
                      32132133  321321 32131   32132 321
                    </Typography>
                    <Button variant="contained" color="secondaty">
                      Learn mode
                      </Button>
                  </div>

                </Grid>
              </Grid>
            </Container>
          </Paper>
          <div className={classes.mainContent}>
            <Container marginBottom="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              THE MAIN TEXT
              </Typography>
              <Typography variant="h5" align="center" color="textSeconfary"  paragraph>
              2 THE MAIN TEXT 2 
              2 THE MAIN TEXT 2 
              2 THE MAIN TEXT 2 
              2 THE MAIN TEXT 2 
              </Typography>
              <div className={classes.mainButtons}>
                <Grid container spacing={3} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary"> Start now</Button>                    
                  </Grid>
                  <Grid item>                    
                    <Button variant="outlined" color="primary"> Learn more</Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cadGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map ((card) =>
            (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title">
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Image for test
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                    <LayerIcon> </LayerIcon>
                    <PlayCircleFilledIcon></PlayCircleFilledIcon>
                  </CardActions>
                </Card>
                 </Grid>
            )
            )}

          </Grid>

          </Container>


        </main>

        <footer>
            <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
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

            
        </footer>


        </>
    );


}