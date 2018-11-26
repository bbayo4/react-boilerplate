import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Props from '../props';

describe('The Props Component', () => {

  const props = {
    text: 'someText',
    list: ['A', 'B', 'C'],
    func: (text) => {},
    comp: React.Component()
  };

  const wrapper = shallow(<Props {...props}/>);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('the button calls a function', () => {
    const propsBtn = wrapper.find('button').at(0);
    propsBtn.simulate('click');
  });

});