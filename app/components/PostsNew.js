import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

import {createPost} from '../actions/index'



/*----------------------------------------------------------*/

class PostsNew extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props      
    return (
      <form onSubmit={ handleSubmit(createPost) }>
        <div className="col-lg-12">
          <label htmlFor="title">title</label>
          <Field
            name="title"                  
            component={renderInput}           
            type="text"/>                     
        </div>
        <div className="col-lg-12">
          <label htmlFor="categories">categories</label>
          <Field
            name="categories"                   
            component={renderInput}           
            type="text"/>                 
        </div>
        <div className="col-lg-12">
          <label htmlFor="content">content</label>
          <Field
            name="content"                   
            component={renderTextArea}          
            type="text"/>                
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
      </form>
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
      <input {...input} placeholder={label} type={type} />
      { touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>)) }
    </div>
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
      <textarea {...input} placeholder={label} type={type} />
      { touched &&
        ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>)) }
    </div>
  </div>
)    

/*---------------------------------------------------------------------*/
  const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required title'
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
  const warn = values => {
    const warnings = {}
    // if (!values.categories) {
    //   warnings.categories = 'Hmm, you seem a bit young...'
    // }
    // return warnings
  }

  
/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'PostsNew',
  validate
}, null, {createPost} )(PostsNew)