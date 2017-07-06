import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

import {createPost} from '../actions/index'


class PostsNew extends Component {
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props  
    
    return (
      <form onSubmit={ handleSubmit(this.props.createPost) }>
      <h3>Create a new post</h3>
        <div className="form-group">
          <label >title</label>
            <input 
              type="text" 
              className="form-control" 
              {...title} />
        </div>
        <div className="form-group">
          <label >categories</label>
            <input 
              type="text" 
              className="form-control" 
              {...categories} />
        </div>
        <div className="form-group">
          <label >content</label>
            <textarea 
              type="text" 
              className="form-control" 
              rows="5"  
              {...content } />
        </div>  
          <button 
            type="submit" 
            className="btn btn-primary">
            Submit
        </button>
      </form>
    )
  }
}
/*Connect = mapStatetoProps, mapDispatchToPops */
/*redux form uses config as first arg*/
PostsNew = reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, {createPost} )(PostsNew)

export default PostsNew