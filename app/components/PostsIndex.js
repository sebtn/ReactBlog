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
          <span className="push-right"> 
            <strong>{post.title}</strong>
          </span>
            <p> {post.categories} </p>
            <p> {post.id} </p>
        </li> 
      )
    })
  }  

/*------------------------------------------------------*/
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? There is a list of post promised!</h1>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary"> 
            Add a post
          </Link>         
        </div>
        <h2 className="Post-list">Post list</h2>
        <ul className="list-group">
            {this.renderPosts()}
        </ul>
      </div>
    )
  }

}

/*------------------------------------------------------*/
function mapStateToProps(state) {
  return { 
    posts: state.posts.all 
  }
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)