import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';
describe('Footer Component Test', () => {
    it('render', () => {

        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();

    })
})