import {combineReducers} from 'redux'
import {ReducerPosts} from './Reducer_post'


  const rootReducer = combineReducers({
    // state: (state = {}) => state
    posts: ReducerPosts,
})

export default rootReducer