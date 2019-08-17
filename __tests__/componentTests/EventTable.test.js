import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import EventTable from '../../src/components/EventTable/EventTable';

describe('EventTable Component', () => {

    it('matches the snapshot', () => {
        const tree = renderer
        .create(<EventTable />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
