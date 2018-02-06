import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import PhotosSection from "./index";
import { ApolloProvider } from "react-apollo";
import createNewClient from "../../graphql/client";
import { MockedProvider } from "react-apollo/test-utils";

describe("PhotosSection tests", () => {
  const wrapper = mount(
    // not shallow
    <MockedProvider client={createNewClient()}>
      <PhotosSection count={10} />
    </MockedProvider>
  );

  const component = wrapper.find(PhotosSection);
  it("render wihout crashing", () => {
    expect(component).toBeDefined();
  });

  it("should have count props", () => {
    expect(component.props().count).toBeTruthy();
  });
});
