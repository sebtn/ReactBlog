import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class PostsNew extends Component {
  render () {
    const { fields: {tilte, categories, content}, handleSubmit } = this.props  
    return (
      <form onSubmit={ handleSubmit }>
      <h3>Create a new post</h3>
        <div className="form-group">
          <label >title</label>
          <input  type="text" className='form-control'/>
        </div>
        <div>
          <label >categories</label>
          <input  type="text" />
        </div>
        <div>
          <label >content</label>
          <input  type="text-area" />
        </div>  
        <button type="submit">Submit</button>
      </form>
    )
  }
}
PostsNew = reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew)

export default PostsNew