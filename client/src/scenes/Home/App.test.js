import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createNewClient from "../../graphql/client";
import { ApolloProvider } from "react-apollo";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import NavButtons from "../../components/Nav";
import PhotoSection from '../../components/Photos';
import config from "../../config";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ApolloProvider client={createNewClient()}>
      <App />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

describe('Render child components', () => {
  const wrapper = mount(
    <ApolloProvider client={createNewClient()}>
      <App />
    </ApolloProvider>
  );

  it("should render one <NavButtons /> component", () => {
    expect(wrapper.find(NavButtons)).toHaveLength(1);
  });

  it("should render one <PhotoSection /> component", () => {
    expect(wrapper.find(PhotoSection)).toHaveLength(1);
  });
});


describe('State changes', () => {
  const wrapper = mount(
    <ApolloProvider client={createNewClient()}>
      <App />
    </ApolloProvider>
  );

});

