import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../app';

describe('The App Component', () => {

  const wrapper = shallow(<App />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should load the Props Component when the props button is clicked', () => {
    const propsBtn = wrapper.find('button').at(0);
    propsBtn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('should load the State Component when the state button is clicked', () => {
    const propsBtn = wrapper.find('button').at(1);
    propsBtn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('should load the Lifecycles Component when the lifecycles button is clicked', () => {
    const propsBtn = wrapper.find('button').at(2);
    propsBtn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('should load the Media Component when the media button is clicked', () => {
    const propsBtn = wrapper.find('button').at(3);
    propsBtn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('should unload any loaded Component when the clear button is clicked', () => {
    const propsBtn = wrapper.find('button').at(4);
    propsBtn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain a property someFunc with a datatype of function', () => {
    window.alert = jest.fn();
    expect(typeof wrapper.instance().someFunc).toEqual('function');
    wrapper.instance().someFunc();
  });

});