import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import * as Redux from 'react-redux'

class PostsIndex extends Component {
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? this is routes working</h1>
      </div>
    )
  }
}

export default Redux.connect()(PostsIndex)