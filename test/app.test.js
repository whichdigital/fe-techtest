import React from 'react';
import { shallow } from 'enzyme';

import Multiplier from '../src/components/Multiplier.jsx';

describe('<App />', () => {
  it('renders the <Multiplier /> component', () => {
    const wrapper = shallow(<Multiplier />);
    expect(wrapper.find('div')).toHaveLength(1);
  })
})

