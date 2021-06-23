import React, {useState} from 'react';

import Button from '@material-ui/core/Button'

import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'



import {Container, Typography, Grid, } from '@material-ui/core'

import useStyles from "./usestyles";



import { withScriptjs, Marker, Searchbox } from "react-google-maps";


function useInputValue(defaultValue = '') {
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


function UpControlElement () {
    const  classes = useStyles();
    const inputStart = useInputValue('Start Point');
    const inputEnd = useInputValue('End Point');






//Travel From : <Input  id="travelfrom" type="text" name="name" {...inputStart.bind} />                

    return (

        <div className={classes.mainContent}>
        <Container marginBottom="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          
          </Typography>
          <Typography variant="h5" align="center" color="textSeconfary"  paragraph>
          
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={3} justify="center">
            <Grid item>
            

            Travel From : <Input  id="travelfrom" type="text" name="name" {...inputStart.bind} />   
              
              </Grid>
              <Grid item>
            Travel To: <Input id="travelto" type="text" name="name" {...inputEnd.bind} />                
              </Grid>
                          
              <Grid item>
                <Button variant="contained" color="primary"> Get Route</Button>                    
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary"> Get positon on map</Button>                    
              </Grid>
              
              <Grid item>  
              <Checkbox id="checkbox" value="registratrtion test" style={{marginLeft: '150px'}} />
              </Grid>
              
              <Grid item>                    
                <Button variant="outlined" color="primary">  StartPosition</Button>
              </Grid>
              <Grid item>                    
                <Button variant="outlined" color="primary"> EndPosition</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>


    )
}

export default UpControlElement