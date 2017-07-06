import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

import {createPost} from '../actions/index'



/*----------------------------------------------------------*/

class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props      
    return (
      <form onSubmit={handleSubmit(createPost) }>
        <div>
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
        <div>
          <label htmlFor="content">content</label>
          <Field
            name="content"                   
            component={renderTextArea}          
            type="text"/>                
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

/*---------------------------------------------------------------------*/
// Define stateless component to render input and errors
  const renderInput = ( field ) =>  {
    return (
      <div>
        <input {...field.input} type={field.type} />  
        { field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span> }
      </div>
    )    
  }  
  const renderTextArea = ( field ) =>  {
    return (
      <div>
        <textarea {...field.input} type={field.type} rows="5"/>  
        { field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span> }
      </div>
    )    
  } 
  
/*---------------------------------------------------------------------*/
export default reduxForm({
  form: 'PostsNew'
}, null, {createPost} )(PostsNew)