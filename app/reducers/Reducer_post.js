import React from 'react'
import {FETCH_POSTS} from '../actions/index.js'

const initialState = {
  all: [],
  post: null
}

export let ReducerPosts = (state = initialState, action) => {
  switch (action.type){
    case FETCH_POSTS:
      return {
        ...state,
       all: action.payload.data
      }
    default:
      return state      
  }
}