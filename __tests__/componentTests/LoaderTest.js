// Packages
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Components
import Loader from '../../src/components/Loader/Loader';


configure({ adapter: new Adapter() });

describe('Loader Component', () => {
    it('Should render without errors', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.exists()).toBe(true)
    });

    test('Snaphot testing', () => {
        const wrapper = shallow(
            <Loader />
        );
        expect(wrapper).toMatchSnapshot();
    })
})
