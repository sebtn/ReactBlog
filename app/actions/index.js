import axios from 'axios'
export const FECTH_POSTS = "FECTH_POSTS"

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