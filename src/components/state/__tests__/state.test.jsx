import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import State from '../state';

describe('the State Component', () => {

  const wrapper = shallow(<State />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should increment the state.counter value when the + button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state().counter).toEqual(1);
  });

  test('should decrement the state.counter value when the - button is clicked if the counter value is greater than 0', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state().counter).toEqual(0);
  });

  test('should not decrement the state.counter value when the - button is clicked if the counter value is equal to 0', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state().counter).toEqual(0);
  });

  test('should change the state.color value when the select box is changed', () => {
    wrapper.find('select').at(0).simulate('change', {target: {value: 'red'}});
    expect(wrapper.state().color).toEqual('red');
  });

});