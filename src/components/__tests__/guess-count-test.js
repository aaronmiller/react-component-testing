import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from '../guess-count';

describe('<GuessCount /> component.', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />);
  });
});
