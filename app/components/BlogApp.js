import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

class BlogApp extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 ">
          <h1 className="title">This is a main router compoenent</h1>
          <Link to="/posts" className="btn btn-link button-route">
            Go to all posts
          </Link>          
          <Link to="/posts/new" className="btn btn-link button-route">
            Add new post
          </Link>
        </div>
        <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(BlogApp)