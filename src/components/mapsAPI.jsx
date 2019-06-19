import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import CurrentLocation from "./maps";
import React from "react";
import { Card, CardText, CardBody, CardHeader, Alert } from "reactstrap";
import animalMapMarker from "../img/animalMapMarker.png";
import CardPictureList from "./cardPictureList";
import userMapMarker from "../img/userIconMarker.png";
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: [],
      userstores: []
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
    console.log(this.state.stores);
    return this.state.stores.map((store, index) => {
      if (store.hasOwnProperty("isuser")) {
        return (
          <Marker
            key={index}
            id={index}
            icon={userMapMarker}
            position={{
              lat: store.latitude,
              lng: store.longitude
            }}
            onClick={this.onMarkerClick}
            markerInfoWindow={
              <div>
                <Card
                  style={{ fontFamily: "Georgia, serif", fontSize: "15px" }}
                >
                  <CardHeader tag="h3">{store.name}</CardHeader>
                  <CardPictureList
                    pic1={store.pic1}
                    pic2={store.pic2}
                    pic3={store.pic3}
                  />
                  <CardBody>
                    <CardText>{store.description}</CardText>
                    <CardText>{"Contact  : " + store.contact}</CardText>
                  </CardBody>
                </Card>
              </div>
            }
            name={store.userid}
            //onClick={() => console.log("You clicked me!")}
          />
        );
      } else {
        return (
          <Marker
            key={index}
            id={index}
            icon={animalMapMarker}
            position={{
              lat: store.latitude,
              lng: store.longitude
            }}
            onClick={this.onMarkerClick}
            markerInfoWindow={
              <div>
                <Card
                  style={{ fontFamily: "Georgia, serif", fontSize: "15px" }}
                >
                  <CardHeader tag="h3">{store.title}</CardHeader>
                  <CardPictureList
                    pic1={store.pic1}
                    pic2={store.pic2}
                    pic3={store.pic3}
                  />
                  <CardBody>
                    <CardText>{store.description}</CardText>
                    <CardText>{"Last seen: " + store.lastseen}</CardText>
                    <CardText>{"In: " + store.pct}</CardText>
                    <CardText>{"Contact  : " + store.contact}</CardText>
                  </CardBody>
                  <CardBody>
                    <CardText className="text-muted">
                      {"This post has been seen by: " +
                        store.seenby +
                        " people"}
                    </CardText>
                    <CardText
                      style={{ fontSize: "10px" }}
                      className="text-muted"
                    >
                      {store.tags}
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            }
            name={store.id}
            //onClick={() => console.log("You clicked me!")}
          />
        );
      }
    });
  };

  onMarkerClick = (props, marker, e) => {
    fetch("https://webapps05backend.herokuapp.com/hit/" + props.noticeid);
    // console.log(props);
    // console.log(marker);
    // console.log(e);
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
      // You should be able to remove this Map element, I've done it and nothing happens
      <div
        style={{
          background: "#e8e8e8",
          margin: "0px"
        }}
      >
        <Alert
          style={{ margin: "0px" }}
          color="#e8e8e8"
          isOpen={true}
          toggle={this.onDismiss}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              margin: "0px",
              textAlign: "center"
            }}
          >
            Active users in your area: 5
          </p>
        </Alert>
        <Map
          style={{ margin: "0px" }}
          item
          xs={12}
          style={style}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={14}
          initialCenter={{ lat: 51.4997265, lng: -0.18323 }}
        >
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            {this.displayMarkers()}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h2>{this.state.selectedPlace.markerInfoWindow}</h2>
              </div>
            </InfoWindow>

            {/*  */}
          </CurrentLocation>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDZ1I2hp5wKo2WoV5XfVPFZf2BJ7QhCpgI"
})(GoogleMapsContainer);
