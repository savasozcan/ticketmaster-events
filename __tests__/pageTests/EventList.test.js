import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EventList from '../../src/pages/EventList/EventList'

configure({ adapter: new Adapter() });

describe('EventList Component', () => {
    it('Should render without errors', () => {
        const wrapper = shallow(<EventList />);
        expect(wrapper.exists()).toBe(true)
    })
})