import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createRootReducer } from './app'
import { Root } from './components/Root'
import * as serviceWorker from './serviceWorker';

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history),
    {},
    compose(
      applyMiddleware(
        routerMiddleware(history),
        // ... other middlewares ...
      ),
    ),
  )

render(<Root store={store} history={history}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
