import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

import {createPost} from '../actions/index'



/*----------------------------------------------------------*/

class PostsNew extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props      
    return (
      <div className="form-container">
        <form onSubmit={ handleSubmit(createPost) }>
          <div >
            <label htmlFor="title">title</label>
            <Field
              name="title"                  
              component={renderInput}           
              type="text"/>                     
          </div>
          <div>
            <label htmlFor="categories">categories</label>
            <Field
              name="categories"                   
              component={renderInput}           
              type="text"/>                 
          </div>
          <div >
            <label htmlFor="content">content</label>
            <Field
              name="content"                   
              component={renderTextArea}          
              type="text"/>                
          </div>
          <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
        </form>
      </div>
    )
  }
}

/*---------------------------------------------------------------------*/
// Define stateless component to render input and errors

const renderInput  = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      { touched &&
        (( error &&      
          <div className="alert alert-warning" role="alert">
            <strong><span>{error}</span></strong> Better check yourself, you're not looking too good.
          </div> 
     )  ||
        (warning && <span>{warning}</span>)) }
    </div>
    <input {...input} placeholder={label} type={type} />
  </div>
)

const renderTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      { touched &&
        ((error &&  
          <div className="alert alert-warning" role="alert">
            <strong><span>{error}</span></strong> Better check yourself, you're not looking too good.
          </div> 
        ) ||
        (warning && <span>{warning}</span>) ) }
    </div>
    <textarea {...input} placeholder={label} type={type}  rows= '7' />
  </div>
)    

/*---------------------------------------------------------------------*/
  const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required Title'
    }
    if (!values.categories) { 
      errors.categories = 'Required categories' 
    }     
    if (!values.content) { 
      errors.content = 'Required content' 
    } 
    return errors
  }

/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'PostsNew',
  validate,
}, null, {createPost} )(PostsNew)