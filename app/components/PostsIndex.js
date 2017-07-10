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
    // console.log(posts)
    return posts.map( (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li> 
      )
    })
    // console.log('hi: -> ', this.props)
  }  

/*------------------------------------------------------*/
  render() {
    return (
      <div className="Main-Container">
        <h1 className="title">See this? There is a list of post primised!</h1>
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