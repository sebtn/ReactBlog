import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import Redux, {connect} from 'react-redux'
import {Link} from 'react-router'

import {fetchPosts} from '../actions/index'

class PostsIndex extends Component {

/*------------------------------------------------------*/
  componentWillMount() {
    this.props.fetchPosts()  
  }

/*------------------------------------------------------*/
  renderPosts = () => {
    let {posts} = this.props
    return posts.map( (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <div className="row post-row">
            <div className="col-md-8">
              <span className="push-left">Id: {post.id}</span>
              <span><strong>Title: {post.title}</strong></span>
              <span className="push-right"><p> Categories: {post.categories} </p></span>
            </div>
            <div className="col-md-4 button-wrapper">
              <Link to={'/posts/' + post.id} className="btn btn-outline-primary button-post">
                Go to post
              </Link>
            </div>
        </div>
      </li> 
      )
    })
  }  

/*------------------------------------------------------*/
  render() {
    let {posts} = this.props
    if (!posts)  {
      return (<h3>Loading...</h3>)
    }
    return (
      <div className="Main-Container">
        <h1 className="title">POSTS LIST</h1>
        <div className="text-center">
          <Link to="/posts/new" className="btn btn-primary btn-lg add-post-button"> 
            Add a post
          </Link>         
        </div>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    )
  }

}

/*------------------------------------------------------*/
function mapStateToProps(state, props) {
  return { 
    posts: state.posts.all 
  }
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)