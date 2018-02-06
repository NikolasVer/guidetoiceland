import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import PhotosSection from "./index";
import { ApolloProvider } from "react-apollo";
import createNewClient from '../../graphql/client';

describe('Render tests', () => {
  const wrapper = shallow(
    <ApolloProvider client={createNewClient()} >
      <PhotosSection count={10} />
    </ApolloProvider>
  );

  it('render wihout crashing', () => {
    expect(wrapper.find(PhotosSection)).toHaveLength(1);
  });
});