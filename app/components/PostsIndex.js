import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import Redux, {connect} from 'react-redux'

import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {
/*------------------------------------------------------*/
componentWillMount() {
  console.log('Called only once!, fetches a promise' )
  console.log(this.props.fetchPosts())

}

/*------------------------------------------------------*/
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? this is routes working</h1>
        
      </div>
    )
  }
}


export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)