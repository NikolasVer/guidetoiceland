import React from "react";
import { shallow, mount } from "enzyme";
import "../../setupTests";
import NavButtons from "./index";

describe("Render tests", () => {
  const fn = jest.fn();
  const component = shallow(<NavButtons _changePhotoCount={fn} />);

  it("renders without crashing", () => {
    expect(component).toBeDefined();
  });


  it('should render 4 buttons', () => {
    const buttons = component.find('button');
    expect(buttons).toHaveLength(4);
  });


  it('each button should have "btn" class', () => {
    component.find('button').forEach(node => {
      expect(node.hasClass('btn')).toBeTruthy();
    })
  });


  it('active button should have "active" class', () => {
    const activeID = component.state().active;
    const activeBtn = component.find(`button`).get(activeID);
    expect(shallow(activeBtn).hasClass('active')).toEqual(true);
  });

});

describe("State tests", () => {
  const fn = jest.fn();
  const component = shallow(<NavButtons _changePhotoCount={fn} />);
  it("state active should equal 1 by default", () => {
    expect(component.state().active).toEqual(0);
  });


  it("state should change on button click", () => {
    const newActiveID = 3;
    const button = shallow(component.find('.btn').get(newActiveID));

    button.simulate('click');

    expect(component.state().active).toEqual(newActiveID)
  });
});
