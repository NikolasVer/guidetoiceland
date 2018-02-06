import React from "react";
// import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import { PropTypes } from "prop-types";

import "./index.scss";

const photoGraphQLQuery = count => gql`
query {
  photos (count: ${count}) {
    id
    name
    link
    description
  }
}`;

class PhotosSection extends React.Component {
  constructor({ count, client }) {
    super();
    this.state = {
      photos: [],
      imageStatus: "loading"
    };
    this.client = client;
  }

  componentWillMount() {
    this.fethData(this.props.count);
  }

  componentWillReceiveProps(_props) {
    this.fethData(_props.count);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  fethData(count) {
    return this.client
      .query({ query: photoGraphQLQuery(count) })
      .then(res => {
        if (res.data.photos) {
          this.setState(_ => ({
            photos: res.data.photos
          }));
        }
      })
      .catch(err => console.error(err));
  }
  render() {
    const { photos } = this.state;

    const getPhotoContainer = photo => {
      return (
        <div className={this.state.imageStatus === 'loaded' ? 'show image-container' : 'hide'} key={photo.id}>
          <img
            src={photo.link}
            alt={photo.name}
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
          <span className="photo-signature">{photo.name}</span>
          <span className="description">{photo.description}</span>
        </div>
      );
    };

    if (!photos.length) return "Loading";

    return photos.map(photo => getPhotoContainer(photo));
  }
}

PhotosSection.propTypes = {
  count: PropTypes.number.isRequired
};

export default withApollo(PhotosSection);
