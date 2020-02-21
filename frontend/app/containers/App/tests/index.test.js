import React from 'react';
import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureMockStore from 'redux-mock-store';
import App from '../index';

const mockStore = configureMockStore();
const store = mockStore({});

const renderer = new ShallowRenderer();

test('<App />', () => {
  const page = renderer.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(page).toMatchSnapshot();
});
