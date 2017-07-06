import React from 'react'
// import {hashHistory, Route, Router, IndexRoute } from 'react-router'
import { hashHistory, Route, Router, IndexRoute } from 'react-router'

import BlogApp from './../components/BlogApp'
import PostsIndex from './../components/PostsIndex'
import PostsNew from './../components/PostsNew'


export default (
  <Router history={hashHistory} > 
    <Route path='/' >
      <IndexRoute component={BlogApp} />
        <Route path="/posts" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
    </Route>
  </Router>
)