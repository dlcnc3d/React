/*global google*/
import React from "react";
import Input from '@material-ui/core/Input'


import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export default function Autocomplete(props) {
  
const [address, setAddress] = React.useState("");
const [coordinates, setCoordinates] = React.useState({
  lat: null,
  lng: null
});

const handleSelect = async value => {
const results = await geocodeByAddress(value);
const latLng = getLatLng(results[0]);
setAddress (value);
setCoordinates (latLng);
console.log (latLng);
};

const searchOptions = {
  location:  google.maps.LatLng(-49.23, 28.43),
  radius: 5000,
  types: ['address']
}



  return (
  <div>
  <PlacesAutocomplete 
    value={address} 
    onChange={setAddress} 
    onSelect={handleSelect}
    searchOptions={searchOptions}
    //onClick= {() => this.props.coordinatesChangeHandler(coordinates)}
    
    >
      {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
      <div>
        <p>Latitude: {coordinates.lat} </p>
        <p>Longitude: {coordinates.lng} </p>
        
      <Input {...getInputProps({placeholder: "Type address"})}
      
      />  
        
        <div>
         {loading ? <div>...loading</div> : null}

         {suggestions.map(suggestion=>{
           const style = {
             backgroundColor:suggestion.active ? "#41b6e6": "#fff"
           };

           
           return (
           <div {...getSuggestionItemProps(suggestion, {style})} >
              {suggestion.description} 
            </div>)
         })}        
         </div>
      </div>
      )}
  </PlacesAutocomplete>
  </div>
 );
  
}