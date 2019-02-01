import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {
  state = { markerPosition: { lat: 52.237049, lng: 21.017532 } };
  render() {
    const { markerPosition } = this.state;
    return (
      <div>
        <Map markerPosition={markerPosition} />
      </div>
    );
  }
}

export default App;
