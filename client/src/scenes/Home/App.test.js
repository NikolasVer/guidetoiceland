import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import createNewClient from "../../graphql/client";
import { ApolloProvider } from "react-apollo";

import { shallow, mount } from "enzyme";
import "../../setupTests";

import NavButtons from "../../components/Nav";
import PhotoSection from '../../components/Photos';
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

it("should render one <NavButtons /> and one <PhotoSection /> components", () => {
  const wrapper = mount(
    <ApolloProvider client={createNewClient()}>
      <App />
    </ApolloProvider>
  );
  expect(wrapper.find(NavButtons)).toHaveLength(1);
  expect(wrapper.find(PhotoSection)).toHaveLength(1);
});

