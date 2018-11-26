import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Lifecycles from '../lifecycles';

describe('The Lifecyles Component', () => {

  const wrapper = shallow(<Lifecycles />);
  const componentPrototype = Lifecycles.prototype;

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('calls componentWillUpdate after toggle box button is clicked', () => {
    jest.spyOn(componentPrototype, 'componentWillUpdate');
    const toggleBoxBtn = wrapper.find('button').at(0);
    toggleBoxBtn.simulate('click');
    expect(componentPrototype.componentWillUpdate.mock.calls.length).toBe(1);
  });

  test('calls componentWillUnmount when necessary', () => {
    jest.spyOn(componentPrototype, 'componentWillUnmount');
    wrapper.unmount();
    expect(componentPrototype.componentWillUnmount).toHaveBeenCalled();
  });

});