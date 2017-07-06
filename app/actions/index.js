import axios from 'axios'
export const FECTH_POSTS = "FECTH_POSTS"
export const CREATE_POST = "CREATE_POST"

const BaseUrl = 'http://reduxblog.herokuapp.com/api'
const apiKey = '?key=asdfdsg' 

/*----------------------------------------------------------*/
export let fetchPosts = () => {
  const request = axios.get(`${BaseUrl}/posts${apiKey}`)
  return {
    type: FECTH_POSTS,
    payload: request
  }
}

/*----------------------------------------------------------*/
export let createPost = (props) => {
  const request = axios.post(`${BaseUrl}/posts${apiKey}`, props)
  return {
    type: CREATE_POST,
    payload: request
  } 
}