import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import CurrentLocation from "./maps";
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle
} from "reactstrap";
import PictureList from "./pictureList";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: []
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
  }

  componentDidMount() {
    this.loadPage();
    setInterval(() => {
      this.loadPage();
    }, 5000);
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      //console.log(store);
      // console.log(store.pic1);
      // console.log(store.pic2);
      // console.log(store.pic3);
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={this.onMarkerClick}
          picList={
            <PictureList
              pic1={store.pic1}
              pic2={store.pic2}
              pic3={store.pic3}
            />
          }
          name={store.id}
          //onClick={() => console.log("You clicked me!")}
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
        initialCenter={{ lat: 51.4997265, lng: -0.18323 }}
      >
        <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.picList}</h4>
            </div>
          </InfoWindow>

          {/*  */}
        </CurrentLocation>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDZ1I2hp5wKo2WoV5XfVPFZf2BJ7QhCpgI"
})(GoogleMapsContainer);
