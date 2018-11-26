import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Media from '../media';

describe('The Media Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Media />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});