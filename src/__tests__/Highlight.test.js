import React from 'react';
import { mount } from 'enzyme';
import Highlight from '../components/Highlight';

describe('Highlight', () => {
  test('Should be Highlight', () => {
    const wrapper = mount(<Highlight />);
    expect(wrapper.is('Highlight')).toBeTruthy();
  });
});

describe('Highlight props', () => {
  let component  = ''
      ,props     = {}
      ,text      = ''
      ,highlight = '';

  beforeEach(() => {
    props = {
      text: 'text',
      highlight: 'text-highlight'
    };

    component = mount(<Highlight {...props} />);
    text      = component.prop('text');
    highlight = component.prop('highlight');
  });

  test('has prop text', () => {
    expect(text).toBeDefined();
    expect(text).toBe(props.text);
  });

  test('has prop highlight', () => {
    expect(highlight).toBeDefined();
    expect(highlight).toBe(props.highlight);
  });
});

