import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// files
import App from '../App';
import render from '../utils/tests/renderWithRouter';

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

  // it('should redirect to app if url path is equal to /', () => {
  //   const { history } = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>,
  //     { wrapper: MemoryRouter });
  //   expect(history.location.pathname).toMatch(/app/);
  // });
})
