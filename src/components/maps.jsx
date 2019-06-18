import React from "react";
import ReactDOM from "react-dom";
import { thisExpression } from "@babel/types";
const mapStyles = {
  map: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    //const str = this.props.stores;
    //console.log(props.stores);
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },
      stores: [],
      circles: []
    };
  }

  /* Let's also update our CurrentLocation component to cater for the instance when the Map is first loaded as
   we cannot solely depend upon the google API being always available, hence we need to check if it's loaded. 
   And also check if the browser's current location is provided and recenter the map to it. 
   */

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  /* Let's define the recenterMap() function which only gets called when the currentLocation in the component's
   state is updated and uses the .panTo() method on the google.maps.Map instance to change the center of the map.
  */

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  // displayCircles = () => {
  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Circle
  //         radius={600}
  //         fillColor={"#AA0000"}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude
  //         }}
  //         name={store.id}
  //       />
  //     );
  //   });
  // };

  displayCircles() {
    //console.log("Im here");
    for (var i = 0; i < this.state.stores.length; ++i) {
      console.log(this.state.stores[i]);
    }
  }
  /* Next, we need to handle the instance when the map has already loaded.This will be handled by 
  the componentDidMount() Lifecycle method which will set a call back to fetch the current location.
  */

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  // Just loadmap definition
  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  renderChildren() {
    const { children } = this.props;
    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <div>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
        {this.displayCircles()}
      </div>
    );
  }
}

export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,

  // this is the initial center before the user's browser is pinged for location, TODO: change later
  initialCenter: {
    lat: 51.4997265,
    lng: -0.18323
  },
  stores: [],

  centerAroundCurrentLocation: false,
  visible: true
};
