import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import Redux, {connect} from 'react-redux'

class PostShow extends Component {
  render() {
    return (
      <h1>
      check meout yo!
      </h1> 
    )
  }
}

export default connect()(PostShow)