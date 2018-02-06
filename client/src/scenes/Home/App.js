import React, { Component } from "react";
import config from "../../config";
import logo from "../../images/logo.svg";
import "./App.scss";

// Components
import PhotoSection from "../../components/Photos";
import NavButtons from "../../components/Nav";
import Loader from "../../components/Loader/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: config.initialPhotoCount,
      showLoader: true
    };
    this._changePhotoCount = this._changePhotoCount.bind(this);
    this.handlePhotosLoad = this.handlePhotosLoad.bind(this);
  }

  _changePhotoCount(count) {
    this.setState(_ => ({ count }));
  }

  handlePhotosLoad() {
    setTimeout(() => {
      this.setState(_ => ({ showLoader: false }));
    }, 1000);
  }

  render() {
    const {count, showLoader} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Fetch {count} items</h4>
        </header>
        <section className="photos-wrapper">
          {showLoader ? <Loader /> : ""}
          <NavButtons _changePhotoCount={this._changePhotoCount} />
          <PhotoSection
            count={count}
            onLoaded={this.handlePhotosLoad}
          />
        </section>
      </div>
    );
  }
}

export default App;
