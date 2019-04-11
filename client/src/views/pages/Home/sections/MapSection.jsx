import React, {Component, Fragment} from 'react';
import GoogleMapReact from 'google-map-react';

//** Import file */
import "../css/MapSection.css";

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class MapSection extends Component {
  static defaultProps = {
    center: {
      lat: 49.836959,
      lng: 18.156083
    },
    zoom: 15
  };
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        {/* <div className="Map-Container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCEMzoXyYft_qbImhTWFoDsY7RRg0If78s" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={49.836959}
              lng={18.156083}
              text={'VSB University'}
            />
          </GoogleMapReact>
        </div> */}
      </Fragment>
    );
  }
}

export default MapSection;