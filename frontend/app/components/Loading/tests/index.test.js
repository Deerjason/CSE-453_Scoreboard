import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../index';

test('Loading Component', () => {
  const component = renderer.create(<Loading />);
  expect(component.toJSON()).toMatchSnapshot();
});
