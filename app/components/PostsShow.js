import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import Redux, {connect} from 'react-redux'

import {fetchPost} from '../actions/index'

class PostShow extends Component {
  componentWillMount() {
    const {post} = this.props
    this.props.fetchPost(this.props.params.id)
    // console.log(post)

  }
  renderOnePost = () => {
      let {post} = this.props
      if (!post) {
        return (<h2>Loading...</h2>)
      }
      return (
        <div>    
          <h3 > This posts belongs to</h3>
            <div>
              <span>{this.props.post.id}</span> 
            </div>
          <span>
            <div>
              {this.props.post.title}
            </div>
          </span>
          <span>
            <div>
              {this.props.post.categories}
            </div>
          </span>
          <span>
            <div>
              {this.props.post.content}
            </div>
          </span>
        </div>
    )  
  }
/*------------------------------------------------------*/
  render() {
    return (
      <div>
        {this.renderOnePost()}
      </div>
    )
  }
}

/*------------------------------------------------------*/
function mapStateToProps(state, porps) {
  return { 
    post: state.posts.post
  }
}

export default connect(mapStateToProps, { fetchPost } )(PostShow)