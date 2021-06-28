/*global google*/
import React, { Component } from "react";
import { compose, withProps, withState, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  MarkerWithLabel,
  OverlayView,
  lifeycle,
  DirectionsRenderer,
  SearchBox,
  InfoWindow,
} from "react-google-maps";

import UpControlElement from "../Components/UpControlElement";

import { createStore } from "redux";

import Button from "@material-ui/core/Button";

import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { Container, Typography, Grid } from "@material-ui/core";

import RouteRender from "./RouteRender";
import RouteDetails from "./RouteDetails";

import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik");
Geocode.enableDebug();














const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_cVatra7UkQioADxTL8DjtySurB77ik",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `700px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),

  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 49.23, lng: 28.43 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((p) => (
      <Marker
        key={p.lat}
        position={{ lat: p.lat, lng: p.lng }}
        label={p.lat}
        place={p.place}
      >
        <InfoWindow>
          <div>
              Start Point
          </div>
        </InfoWindow>
      </Marker>
    ))}

    {props.IsRouteshown && (
      <RouteRender Start={props.Start} End={props.End}></RouteRender>      
    )}
{props.IsRouteshownByAuto && (
      <RouteRender Start={props.StartByAuto} End={props.EndByAuto}></RouteRender>      
    )}

  </GoogleMap>
));

export default MyMapComponent;
