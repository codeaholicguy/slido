// eslint-disable-next-line
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {configureStore} from './store'
import createRoutes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes()

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
  )
}

renderApp()
