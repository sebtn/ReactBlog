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
          <strong>{post.title}</strong>
          <span className="push-right"><p> {post.categories} </p></span>
          <Link to={'/posts/' + post.id} className="btn btn-link">
            Go to post
          </Link>
        </li> 
      )
    })
  }  

/*------------------------------------------------------*/
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? There is a list of post promised!</h1>
        <div className="text-center">
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
function mapStateToProps(state, props) {
  return { 
    posts: state.posts.all 
  }
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)