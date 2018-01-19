import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react' 

export class MapContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedPlace: null
        }
      }

    render() {
        return (
            <Map google={window.google} width="80%" />
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbliwGlLHxonKMdl1BCULm7ZbTxOm_bDE'
})(MapContainer)