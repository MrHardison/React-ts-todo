import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './store/reducers/rootReducer'
import * as serviceWorker from './serviceWorker'

import App from './containers/App'
import './index.sass'

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
