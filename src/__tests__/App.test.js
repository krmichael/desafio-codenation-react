import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';

describe('App', () => {
    let component = '';
    const search = '';

    beforeEach(() => {
        component = mount(<App />);
    });
    
    test('Should be App', () => {
        expect(component.is('App')).toBeTruthy();
    })
    
    test('searchString is set to state as an empty string', () => {
        expect(component.state().searchString).toEqual(search);
    });

    test('Array items is set state', () => {
        expect(Array.isArray(component.state().items)).toBe(true);
    });
});

