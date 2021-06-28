import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";

import { Container, Typography, Grid } from "@material-ui/core";

import useStyles from "./usestyles";

import { withScriptjs, Marker, Searchbox } from "react-google-maps";

import Autocomplete from "react-google-autocomplete";

import OnAuto from "../Gmap/Autocomplete";

//import Autocomplete from "react-google-autocomplete";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

//lat: 49.23, lng: 28.43

function UpControlElement(props) {
  //const startP = useInputValue(props.Start);
  //const endP = useInputValue(props.End);

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
              <Button
                variant="contained"
                onClick={props.GetRouteHandler}
                color="primary"
              >
                {" "}
                Get Route by click
              </Button>
            </Grid>
            <Grid item>
              <Button 
              variant="contained" 
              color="primary"
              onClick={props.GetRouteHandlerByAuto}
              >
                {" "}
                Get route by place
                


              </Button>
            </Grid>

            <Grid item>
              <Checkbox
                id="checkbox"
                value="registratrtion test"
                style={{ marginLeft: "150px" }}
              />
            </Grid>

            <Grid item>
              <Button variant="outlined" color="primary">
                {" "}
                StartPosition
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                {" "}
                EndPosition
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default UpControlElement;
