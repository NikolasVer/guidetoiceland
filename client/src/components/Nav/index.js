import React, { Component } from "react";
import PropTypes from "prop-types";

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
      { id: 0, value: 5, text: "Popular tips" },
      { id: 1, value: 10, text: "Verified locals" },
      { id: 2, value: 15, text: "Latest tips" },
      { id: 3, value: 20, text: "Newest locals" }
    ];

    return (
      <section className="top-nav-buttons">
        {buttons.map(item => (
          <button
            key={item.id}
            className={this.state.active === item.id? "active btn" : 'btn'}
            onClick={() => this.clickHandler(item.id, item.value)}
          >
            {item.text}
          </button>
        ))}
      </section>
    );
  }
}

NavButtons.propTypes = {
  _changePhotoCount: PropTypes.func.isRequired
};

export default NavButtons;
