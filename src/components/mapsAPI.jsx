import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import CurrentLocation from "./maps";

var tstore = [];
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: []

      // stores: [
      //   { latitude: 52.951069, longitude: -1.244046 },
      //   { latitude: 51.493743, longitude: -0.218652 }
      // ]
    };

    this.loadPage = this.loadPage.bind(this);
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  loadPage() {
    fetch("https://webapps05backend.herokuapp.com/map")
      .then(function(response) {
        return response.json();
      })
      .then(response => {
        this.setState({ stores: response });
        //console.log(response);
      });

    // for (var i = 0; i < response.length; ++i) {
    //   {
    //     tstore.push({
    //       latitude: response[i].latitude,
    //       longitude: response[i].longitude
    //     });
    //   }
    // }
    //this.setState({ stores: response });
    // console.log(response.json);
  }

  componentDidMount() {
    this.loadPage();
    setInterval(() => {
      this.loadPage();
    }, 5000);
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: "100vw",
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto"
    };
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 39.648209, lng: -75.711185 }}
      >
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          {this.displayMarkers()}
          {/* <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        /> */}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDZ1I2hp5wKo2WoV5XfVPFZf2BJ7QhCpgI"
})(GoogleMapsContainer);
