import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  parseCoordinates = (coordinates) => {
    return {
      lat: coordinates.lat,
      lng: coordinates.lon
    };
  };

  render() {
    const AnyReactComponent = ({text}) => <div><i id="map-marker" className="fas fa-location-arrow"
                                                  data-fa-transform="rotate-270"/></div>;
    return (

      <div className='box-shadow' style={{height: '50vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyCh005J1A_rd5Jtyv4EO1TAaRvF67jVRWs'}}
          defaultCenter={this.props.center}
          center={this.parseCoordinates(this.props.coord)}
          defaultZoom={this.props.zoom}>
          <AnyReactComponent
            lat={this.props.coord.lat}
            lng={this.props.coord.lon}
            text={this.props.city}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;