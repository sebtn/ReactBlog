import axios from 'axios'
export const FETCH_POSTS = "FETCH_POSTS"
export const CREATE_POST = "CREATE_POST"
export const FETCH_POST = "FETCH_POST"
export const DELETE_POST = "DELETE_POST"

const BaseUrl = 'http://reduxblog.herokuapp.com/api'
const apiKey = '?key=asdfdsg' 

/*----------------------------------------------------------*/
export let fetchPosts = () => {
  const request = axios.get(`${BaseUrl}/posts${apiKey}`)
  return {
    type: FETCH_POSTS,
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

/*----------------------------------------------------------*/
export function fetchPost (id) {
  const request = axios.get(`${BaseUrl}/posts/${id}${apiKey}`)
  return {
    type: FETCH_POST,
    payload: request
  } 
}

/*----------------------------------------------------------*/
export function deletePost (id) {
  const request = axios.delete(`${BaseUrl}/posts/${id}${apiKey}`)
  return {
    type: DELETE_POST,
    payload: request
  } 
}