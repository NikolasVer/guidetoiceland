import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

function PhotosSection({ data: { photos, loading, error } }) {
  if (error) {
    console.log("Error!".error);
    return false;
  }
  if (loading) return "Loading...";

  return <img src={photos.link} alt={photos.name} />;
}

export default graphql(gql`
  query {
    photos(id: "1") {
      id
      name
      link
      description
    }
  }
`)(PhotosSection);
