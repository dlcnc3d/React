/*global google*/
import React, {useEffect} from "react";
import Input from '@material-ui/core/Input'
import { Tooltip } from "@material-ui/core";


import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";



export default function Autocomplete(props) {
  
const [address, setAddress] = React.useState("");
const [coordinates, setCoordinates] = React.useState({
  lat: null,
  lng: null
});


const handleSelect = async value => {
const results = await geocodeByAddress(value);
const latLng = results[0].geometry.location.lng();
const result ={lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}

setAddress (value);
setCoordinates (result);
console.log (latLng);


props.coordinatesChangeHandler(result)
};


const searchOptions = {
  location: new google.maps.LatLng(49.23, 28.48, true),
  radius: 500,
  types: ['address'],
  componentRestrictions: { country: "UA" }
}


  return (
  <div>
  <PlacesAutocomplete 
    searchOptions={searchOptions}
    value={address} 
    onChange={setAddress} 
    onSelect={handleSelect}        
    >
      {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
      <div>       
        <Tooltip title="Type address">  

      <Input {...getInputProps({placeholder: "Type address"})}
      
      />  
      </Tooltip>   
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