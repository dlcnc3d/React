import React from "react";
import Button from '@material-ui/core/Button'
import {Container, Typography, Grid} from '@material-ui/core'

import useStyles from "../src/Components/usestyles";


function UpControlElement () {
    const  classes = useStyles();

    return (

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


    )
}

export default UpControlElement