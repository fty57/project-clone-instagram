import { ADD_COMMENT, ADD_POST } from "./actionTypes";
import axios from 'axios'

export const addPost = post => {
     return dispatch =>{
          // O método http
          axios.post('./posts.json', { ...post })
          .catch(err => console.error(err))
          .then(res => console.log(res.data))
     }
     /* return {
          type: ADD_POST,
          payload: post
     } */
}

export const addComment = payload => {
     return {
          type: ADD_COMMENT,
          payload
     }
}