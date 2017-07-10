import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import Redux, {connect} from 'react-redux'
import {Link, hashHistory} from 'react-router'

import {fetchPost, deletePost} from '../actions/index'

class PostShow extends Component {
  componentWillMount() {
    const {post} = this.props
    this.props.fetchPost(this.props.params.id)
  }
  
/*------------------------------------------------------*/
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
              title:  <p>
               {this.props.post.title}
              </p> 
            </div>
          </span>
          <span>
            <div>
             is about: <p>
              {this.props.post.categories}
             </p> 
            </div>
          </span>
          <span>
            <div>
             the content:  <p>
              {this.props.post.content}
             </p> 
            </div>
          </span>
        </div>
    )  
  }

/*------------------------------------------------------*/
onClickDelete = () => {
  let {post} = this.props
  this.props.deletePost(this.props.params.id)
  hashHistory.push('/')
}

/*------------------------------------------------------*/
  render() {
    return (
      <div className="single-post-container row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            {this.renderOnePost()}
            <Link to='/posts' className="btn btn-outline route-button">
              Go to all posts
            </Link>
            <button className="btn btn-danger"
              onClick={this.onClickDelete}>
              delete post
            </button>
          </div>
          <div className="col-md-1"></div>
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

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostShow)