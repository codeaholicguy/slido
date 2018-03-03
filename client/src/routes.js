import React from 'react'
import {Route} from 'react-router'

import authService from './core/services/auth'

import App from './components/App'
import Register from './components/Register'
import Login from './components/Login'
import User from './components/User'
import Home from './components/Home'
import CreateEvent from './components/CreateEvent'
import Event from './components/Event'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" onEnter={(params, replace) => replace('/home')} />
      <Route path="/home" component={Home} />
      <Route
        path="/register"
        onEnter={(params, replace) => {
          return authService.isAuthenticated() && replace('/user')
        }}
        component={Register}
      />
      <Route
        path="/login"
        onEnter={(params, replace) => {
          return authService.isAuthenticated() && replace('/user')
        }}
        component={Login}
      />
      <Route
        path="/user"
        onEnter={(params, replace) => {
          return !authService.isAuthenticated() && replace('/login')
        }}
        component={User}
      />
      <Route path="/event/:code" component={Event} />
      <Route
        path="/createEvent"
        onEnter={(params, replace) => {
          return !authService.isAuthenticated() && replace('/login')
        }}
        component={CreateEvent}
      />
    </Route>
  )
}
