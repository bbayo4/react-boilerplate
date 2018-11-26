import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Spinner from '../spinner';

describe('The Spinner Component', () => {

  const wrapper = shallow(<Spinner />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});