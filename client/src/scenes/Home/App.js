import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.scss';

// Components
import PhotoSection from '../../components/Photos';
import NavButtons from '../../components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {count: 10};
    this.loadPhotos = this.loadPhotos.bind(this);
  }

  loadPhotos(count) {
    this.setState( _ => ({count}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Fetch {this.state.count} items</h4>
        </header>

        <NavButtons loadPhotos={this.loadPhotos}/>

        <section className="photos-wrapper">
          <PhotoSection count={this.state.count}/>
        </section>
      </div>
    );
  }
}

export default App;
