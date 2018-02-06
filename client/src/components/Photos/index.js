import React from "react";
import { withApollo } from "react-apollo";
import { PropTypes } from "prop-types";
import "./index.scss";
import { Grid, Row, Col } from "react-bootstrap";
import { photoGraphQLQuery } from '../../graphql/query';

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

  componentDidMount() {
    window.onload = () => {
      this.props.onLoaded()
    }
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
          }
        })
        .catch(err => console.error(err));
  }
  render() {
    const { photos } = this.state;

    const getPhotoContainer = photo => {
      return (
        <Col lg={2} md={4} sm={6} xs={12} className="#extra-large-view" key={photo.id}>
          <div className="image-container">
            <img src={photo.link} alt={photo.name} />
            <span className="photo-signature">{photo.name}</span>
            <span className="description">{photo.description}</span>
          </div>
        </Col>
      );
    };

    return (
      <Grid fluid={true}>
        <Row>{photos.map(photo => getPhotoContainer(photo))}</Row>
      </Grid>
    );
  }
}

PhotosSection.propTypes = {
  count: PropTypes.number.isRequired
};

export default withApollo(PhotosSection);
