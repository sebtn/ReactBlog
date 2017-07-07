import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import * as Redux from 'react-redux'

class BlogApp extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 ">
          <h1 className="title">See this? this is redux and router</h1>
        </div>
        <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(BlogApp)