import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router'

import {createPost} from '../actions/index'



/*----------------------------------------------------------*/

class PostsNew extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props      
    return (
      <div>
        <h1>Add a blog post</h1>
        <div className="form-container">
          <form onSubmit={ handleSubmit(createPost) }>
            <div >
              <label>Title</label>
              <Field
                name="title"                  
                placeholder="Type a title for the post"
                component={renderInput}           
                type="text"
                />                     
            </div>
            <div>
              <label>Categories</label>
              <Field
                name="categories"                   
                component={renderInput}           
                type="text"
                placeholder="Enter categories for the post"
                />     
            </div>
            <div >
              <label>Content</label>
              <Field
                name="content"                   
                component={renderTextArea}          
                type="text"
                placeholder="Start typing here"/>                
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
            <Link to="/posts" className="btn btn-danger">Cancel</Link>
          </form>
        </div>
      </div>
    )
  }
}

/*---------------------------------------------------------------------*/
// Define stateless component to render input and errors

const renderInput  = ({
  placeholder,
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      { touched &&
        (( error &&      
          <div className="alert alert-danger" role="alert">
            <strong><span>{error}</span></strong> Better check yourself, you're not looking too good.
          </div> 
         ))
      }
    </div>
    <input {...input} placeholder={placeholder} type={type} />
  </div>
)

const renderTextArea = ({
  placeholder,
  input,
  label,
  type,
  meta: { touched, error}
}) => (
  <div>
    <label>{label}</label>
    <div>
      { touched &&
        ((error &&  
          <div className="alert alert-danger" role="alert">
            <strong><span>{error}</span></strong> Better check yourself, you're not looking too good.
          </div> 
        ))
      }
    </div>
    <textarea {...input} placeholder={placeholder} type={type}  rows= '7' />
  </div>
)    

/*---------------------------------------------------------------------*/
  const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required title Field'
    }
    if (!values.categories) { 
      errors.categories = 'Required categories Field' 
    }     
    if (!values.content) { 
      errors.content = 'Required content Field' 
    } 
    return errors
  }

/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'PostsNew',
  validate,
}, null, {createPost} )(PostsNew)