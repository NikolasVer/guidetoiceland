import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';

import "./index.scss";

class NavButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {active: 0};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(id, count) {
    this.props._changePhotoCount(count);
    this.setState(_ => ({active: id}));
  }

  render() {
    const buttons = [
      { id: 0, value: 12, text: "Popular tips" },
      { id: 1, value: 18, text: "Verified locals" },
      { id: 2, value: 24, text: "Latest tips" },
      { id: 3, value: 30, text: "Newest locals" }
    ];

    return (
      <section className="top-nav-buttons">
        {buttons.map(item => (
          <Button
            key={item.id}
            className={this.state.active === item.id? "active btn" : 'btn'}
            onClick={() => this.clickHandler(item.id, item.value)}
          >
            {item.text}
          </Button>
        ))}
      </section>
    );
  }
}

NavButtons.propTypes = {
  _changePhotoCount: PropTypes.func.isRequired
};

export default NavButtons;
