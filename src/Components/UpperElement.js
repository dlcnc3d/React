import React, {useState} from "react";
//import Button from '@material-ui/core/Button'
import {Container, Typography,  Paper, Grid} from '@material-ui/core'
import useStyles from "./usestyles";



function useInputValue(defaultValue = ' Chose start and end points') {
  const [value, setValue] = useState(defaultValue)     

return {
  bind:{
  value,
  onChange: event => setValue(event.target.value)
  },
clear: () => setValue(''),
value: () => value
}
}







//    Chose start and end points



function UpperElement (props){
    
    const  classes = useStyles();

return (

    <Paper className={classes.mainFeaturesPost}
    style={{ backgroundColor:"#0276aa" }}
    >
      <Container fixed >
        <div className={classes.overlay}> </div>
        <Grid container>
          <Grid item md={5}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
              component="h6"
              variant="h6"
              color="inherit"
              gutterBottom              
              >
                 
                distanse is ={props.result}
                                  
             
              </Typography>               
              
            </div>

          </Grid>
        </Grid>
      </Container>
    </Paper>
)
}


export default UpperElement
