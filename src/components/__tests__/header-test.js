import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../header';

describe('<Header /> component.', () => {
  it('Should render without crashing', () => {
    shallow(<Header />);
  });
});
