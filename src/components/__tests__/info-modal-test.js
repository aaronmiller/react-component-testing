import React from 'react';
import { shallow, mount } from 'enzyme';

import InfoModal from '../info-modal';

describe('<InfoModal /> component.', () => {
  it('Should render without crashing', () => {
    shallow(<InfoModal />);
  });
});
