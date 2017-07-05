import React from 'react'
// import {hashHistory, Route, Router, IndexRoute } from 'react-router'
import { hashHistory, Route, Router, IndexRoute } from 'react-router'

import BlogApp from './../components/BlogApp'
import PostsIndex from './../components/PostsIndex'

const Greeting = () =>{
  return <div>
    <h1>
      
    Hey
    </h1>
    </div>
}

export default (
  <Router history={hashHistory} > 
    <Route path='/' >
      <IndexRoute component={BlogApp} />
      <Route path="/greet" component={Greeting} />
      <Route path="/posts" component={PostsIndex} />
    </Route>
  </Router>
)