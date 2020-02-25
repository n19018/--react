import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { lat: null };

  render() {

    navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => console.log(err)
    );

    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
