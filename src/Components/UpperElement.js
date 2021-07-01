import React from "react";
import {Container, Typography,  Paper, Grid} from '@material-ui/core'
import useStyles from "./usestyles";


function UpperElement (props){
    
    const  classes = useStyles();

return (
    <Paper className={classes.mainFeaturesPost}
    style={{ backgroundColor:" #6699ff" }}
    >
      <Container fixed >
        <div className={classes.overlay}> </div>
        <Grid container>
          <Grid item md={20}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
              component="h3"
              variant="h6"
              color="inherit"
              gutterBottom 
              align="justify"
              >               
               {props.IsRouteshown &&
                
                <div>
                parameters of route: cost is {props.dataRoute.fare}, distance is {props.dataRoute.distance}, duration is {props.dataRoute.duration}, 
                approximate number of transfers is {
                ((props.dataRoute.fareValue === 5 || props.dataRoute.fareValue === 4 || props.dataRoute.fareValue === 10) ? 0 : parseInt(props.dataRoute.fareValue/12.1))
                }                
               </div>                
                }                                    
             
              </Typography>              
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
)
}

export default UpperElement
