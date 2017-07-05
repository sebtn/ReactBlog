import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {hashHistory, Route, Router, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import ReduxPromise from 'redux-promise'

import firebase from './../firebase/index'
import reducers from './reducers'
import router from './router/index'
import  '././styles/app.scss' 


const createStoreMiddleware =applyMiddleware(ReduxPromise)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f )

'use strict'
ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers, devExtension)}>
    {router}
  </Provider>
  ,document.getElementById('root'))