/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from '../my-component';

jest.unmock('../my-component');

describe('MyComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MyComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
