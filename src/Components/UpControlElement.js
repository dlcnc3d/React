import React from "react";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Typography, Grid } from "@material-ui/core";
import useStyles from "./usestyles";



function UpControlElement(props) {
  

  const classes = useStyles();

  return (
    <div className={classes.mainContent}>
      <Container marginBottom="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        ></Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSeconfary"
          paragraph
        ></Typography>
        <div className={classes.mainButtons}>
          <Grid container spacing={3} justify="center">
            <Grid item></Grid>
            <Grid item></Grid>

            <Grid item>
            <Tooltip title="Click to build the route">
              <Button
                variant="contained"
                onClick={props.GetRouteHandler}
                color="primary"
              >
                {" "}
                Build Route
              </Button>
              </Tooltip>
            </Grid>
            <Grid item>
            <Tooltip title="Imitation of registration">
             
              <Checkbox
                id="checkbox"
                value="registratrtion test"
                style={{ marginLeft: "250px" }}
                onClick={props.GetOncheckedHandler}
              />
               </Tooltip>
            </Grid>

            <Grid item>
            <Tooltip title="Click to get your geolocation posittion">
              <Button 
              variant="outlined" 
              color="primary"
              onClick={props.GetPositionHandler}
              
              >
                {" "}
                Start poin by Geoposition
              </Button>
              </Tooltip>
            </Grid>

            

            <Grid item>
            <Tooltip title="Delete all poits on map">
              <Button variant="outlined" color="secondary"
              onClick={props.DelAllpointsHandler}
              >
                {" "}
                Delete All points and Routes
              </Button>
              </Tooltip>
            </Grid>
           
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default UpControlElement;
