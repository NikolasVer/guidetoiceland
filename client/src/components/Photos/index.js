import React from "react";
// import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { withApollo } from "react-apollo";
import { PropTypes } from 'prop-types';

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
      photos: []
    };
    this.client = client;
  }

  componentWillMount() {
    this.fethData(this.props.count);
  }

  componentWillReceiveProps(_props) {
    this.fethData(_props.count);
  }

  fethData(count) {
    return this.client
      .query({ query: photoGraphQLQuery(count) })
      .then(res => {
        if (res.data.photos) {
          this.setState(_ => ({
            photos: res.data.photos
          }));
        } else {
          return "Loading";
        }
      })
      .catch(err => console.error(err));
  }
  render() {
    const { photos } = this.state;

    if (!photos.length) {
      return "Loading";
    } else {
      return photos.map(photo => (
        <img src={photo.link} alt={photo.name} key={photo.id} />
      ));
    }
  }
}

PhotosSection.propTypes = {
  count: PropTypes.number.isRequired
}

export default withApollo(PhotosSection);
