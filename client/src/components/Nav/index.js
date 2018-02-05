
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class NavButtons extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(count) {
       this.props.loadPhotos(count);
    }

    render() {
        return (
            <section className="top-nav-buttons">
                <button className="btn" onClick={() => this.clickHandler(10)}>Popular tips</button>
                <button className="btn" onClick={() => this.clickHandler(20)}>Verified locals</button>
                <button className="btn" onClick={() => this.clickHandler(30)}>Latest tips</button>
                <button className="btn" onClick={() => this.clickHandler(40)}>Newest locals</button>
            </section>
        )
    }
}

NavButtons.propTypes = {
    loadPhotos: PropTypes.func.isRequired
};

export default NavButtons;