import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';

// files
import App from '../App';

const initialState = {
  phones: {
    phoneList: []
  }
};

const mockStore = configureStore([thunk]);

describe('App', () => {
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  })

  test('render', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
})
