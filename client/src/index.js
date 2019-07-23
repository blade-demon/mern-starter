import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore (reducers, {}, applyMiddleware ());

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();