import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import * as Redux from 'react-redux'

class BlogApp extends Component {
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? this is redux and router</h1>
      </div>
    )
  }
}

export default Redux.connect()(BlogApp)