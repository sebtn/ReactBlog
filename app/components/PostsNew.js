import React, {Component} from 'react'
import  PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import {Link, hashHistory} from 'react-router'

import {createPost} from '../actions/index'



class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
/*----------------------------------------------------------*/
  onSubmitRedirect = (props) => {
    createPost(props)
    hashHistory.push('/')
  }
/*----------------------------------------------------------*/

  render() {
    const { handleSubmit, pristine, reset, submitting, onSubmit } = this.props      
    return (
      <div>
        <h1>Add a blog post</h1>
        <div className="form-container">
          <form onSubmit={ handleSubmit(this.onSubmitRedirect) } >
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
                placeholder="Please start typing here..."/>                
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
            <Link to="/posts" className="btn btn-link b1-button">Cancel</Link>
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
    <div>
      { touched &&
        (( error &&      
          <strong className="alert alert-danger" 
            role="alert">
            <span>{error}</span>
          </strong> 
         ))
      }
    </div>
    <label>{label}</label>
    <input {...input} 
      placeholder={placeholder} 
      type={type} />
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
    <div>
      { touched &&
        ((error &&  
          <strong className="alert alert-danger" 
            role="alert">
            <span>{error}</span>
          </strong> 
        ))
      }
    </div>
    <label>{label}</label>
    <textarea {...input} 
      placeholder={placeholder} 
      type={type} 
      rows= '10' />
  </div>
)    

/*---------------------------------------------------------------------*/
  const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
    if (!values.categories) { 
      errors.categories = 'Required' 
    }     
    if (!values.content) { 
      errors.content = 'Required' 
    } 
    return errors
  }

/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'PostsNew',
  validate,
}, null, {createPost} )(PostsNew)