import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {ReducerPosts} from './Reducer_post'


  const rootReducer = combineReducers({
    // state: (state = {}) => state
    posts: ReducerPosts,
    form: formReducer
})

export default rootReducer