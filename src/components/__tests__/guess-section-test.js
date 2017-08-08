import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessSection from '../guess-section';

describe('<GuessSection /> component.', () => {
  it('Should render without crashing', () => {
    shallow(<GuessSection />);
  });
});
