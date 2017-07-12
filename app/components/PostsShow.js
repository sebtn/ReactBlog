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
        return (<h3>Loading...</h3>)
      } else {
      return (
       <div className="main-box">   
          <h3 > This posts belongs to: </h3>
            <div>
              <p>
                <span>{this.props.post.id}</span> 
              </p>
            </div>
          <span>
            <div><strong>
              title: </strong> <p>
               {this.props.post.title}
              </p> 
            </div>
          </span>
          <span>
            <div><strong>
             is about: </strong><p>
              {this.props.post.categories}
             </p> 
            </div>
          </span>
          <span>
            <div><strong>
             the content:  </strong><p>
              {this.props.post.content}
             </p> 
            </div>
          </span>
        </div>
      )  
    }
  }

/*------------------------------------------------------*/
onClickDelete = () => {
  this.props.deletePost(this.props.params.id)
    .then((res)=> {
      hashHistory.push('/posts')
    }, (err) => {
      console.log(err)
  })
}

/*------------------------------------------------------*/
  render() {
    return (
      <div className="single-post-container">
        <div className="row">
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-md-10 col-lg-10 halfman">
            {this.renderOnePost()}
            <Link to='/posts' className="btn btn-link btn-lg ">
              Go to all posts
            </Link>
            <button className="btn btn-danger route-button"
              onClick={this.onClickDelete}
              type="submit">
              delete post
            </button>
          </div>
          <div className="col-md-1 col-lg-1"></div>
      </div>
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