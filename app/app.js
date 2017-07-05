import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {hashHistory, Route, Router, IndexRoute } from 'react-router'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

// import ReduxPromise from 'redux-promise'
import firebase from './../firebase/index'
import reducers from './reducers'
import routes from './router/router'
import  '././styles/app.scss' 
import BlogApp from './components/BlogApp'



const createStoreMiddleware =applyMiddleware()(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'
ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers)}>
    <Router history={hashHistory} > 
      <Route path='/' component={BlogApp} />
      <IndexRoute  />
    </Router>
  </Provider>
  ,document.getElementById('root'))