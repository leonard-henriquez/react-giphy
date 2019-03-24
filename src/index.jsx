import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import App from './containers/app';

import queryReducer from './reducers/query_reducer';
import gifsReducer from './reducers/gifs_reducer';
import selectedGifReducer from './reducers/selected_gif_reducer';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  query: queryReducer,
  gifs: gifsReducer,
  selectedGif: selectedGifReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>,
    root
  );
}
