import React, { Component } from 'react';
import config from '../../config';
import logo from '../../images/logo.svg';
import './App.scss';

// Components
import PhotoSection from '../../components/Photos';
import NavButtons from '../../components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {count: config.initialPhotoCount};
    this._changePhotoCount = this._changePhotoCount.bind(this);
  }

  _changePhotoCount(count) {
    this.setState( _ => ({count}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Fetch {this.state.count} items</h4>
        </header>

        <NavButtons _changePhotoCount={this._changePhotoCount}/>

        <section className="photos-wrapper">
          <PhotoSection count={this.state.count}/>
        </section>
      </div>
    );
  }
}

export default App;
