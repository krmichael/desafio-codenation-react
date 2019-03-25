import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from '../components/RecipeItem';

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    });
});

describe('RecipeItem props', () => {
    let component    = ''
        ,props       = {}
        ,thumbnail   = ''
        ,title       = ''
        ,ingredients = '';

    beforeEach(() => {
        //Fake props
        props = {
            thumbnail: 'source',
            title: 'title',
            ingredients: 'vodka, limão'
        };

        component   = mount(<RecipeItem {...props} />);
        thumbnail   = component.prop('thumbnail');
        title       = component.prop('title');
        ingredients = component.prop('ingredients');
    });

    test('has prop thumbnail', () => {
        expect(thumbnail).toBeDefined();
        expect(thumbnail).toBe(props.thumbnail);
    });

    test('has prop title', () => {
        expect(title).toBeDefined();
        expect(title).toBe(props.title);
    });

    test('has props ingredients', () => {
        expect(ingredients).toBeDefined();
        expect(ingredients).toBe(props.ingredients);
    });
});

