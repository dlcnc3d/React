import React from "react";
import Button from '@material-ui/core/Button'
import {Container, Typography,  Paper, Grid} from '@material-ui/core'
import useStyles from "../src/Components/usestyles";


function UpperElement (){
    
    const  classes = useStyles();

return (

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
)
}


export default UpperElement
