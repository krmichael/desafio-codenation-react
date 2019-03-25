import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
    test('Should be App', () => {
        const wrapper = mount(<Navbar />);
        expect(wrapper.is('Navbar')).toBeTruthy();
    });
});

describe('Input', () => {
    let component  = ''
        ,props     = {}
        ,input     = ''
        ,value     = ''
        ,onchange  = ''
        ,type      = ''
        ,arialabel = '';

    beforeEach(() => {
        const onChange = jest.fn();

        //Fake props
        props = {
            value: 'receita',
            onChange,
            type: 'search',
            ariaLabel: 'Search'
        };

        component = shallow(<Navbar {...props} />);
        input     = component.find('input');
        value     = input.prop('value');
        onchange  = input.prop('onChange');
        type      = input.prop('type');
        arialabel = input.prop('aria-label');
    });

    test('has input element', () => {
        expect(input.length).toBe(1);
    });

    test('has prop value', () => {
        expect(value).toBeDefined();
        expect(value).toBe(props.value);
    });

    test('has prop onChange', () => {
        expect(onchange).toBeDefined();
        expect(onchange).toBe(props.onChange);
    });

    test('has prop value', () => {
        expect(type).toBeDefined();
        expect(type).toBe(props.type);
    });

    test('has aria label', () => {
        expect(arialabel).toBeDefined();
        expect(arialabel).toBe(props.ariaLabel);
    });
});

