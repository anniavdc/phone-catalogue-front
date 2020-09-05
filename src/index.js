import React from 'react';
import ReactDOM from 'react-dom';

// libraries
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// files
import App from './App';

import './index.scss';

/**
 * enable redux dev tools
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
});

const rootReducer = (state, action) => appReducer(state, action);

/**
 * create store with combined reducers and middleware
 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
