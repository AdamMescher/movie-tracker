import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import FavoritesIndexContainer from
  './components/Favorites/FavoritesIndexContainer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './utils/rootReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/favorites" component={FavoritesIndexContainer} />
      </div>
    </Router>
  </Provider>, document.getElementById('main')
);
