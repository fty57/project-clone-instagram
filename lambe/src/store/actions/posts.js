import { ADD_COMMENT, SET_POSTS, CREATING_POSTS, POST_CREATED } from "./actionTypes";
import axios from 'axios'

import {setMessage} from './message'

export const addPost = post => {
     return dispatch =>{
          dispatch(creatingPost())

          // O método http
          axios({
               url: 'uploadImage',
               baseURL: 'http://localhost/',
               method: 'post',
               data: {
                    image: post.image.base64
               }
          })
               .catch(err => dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'})))
               .then(res => {
                    post.image = res.data.imageUrl
                    axios.post('./posts', { ...post })
                    .catch(err => {
                         dispatch(setMessage({title: 'Erro', text: err}))
                    })
                    .then(res => {
                         dispatch(fetchPosts())
                         dispatch(postCreated())
                         dispatch(setMessage({title: 'Sucesso', text: 'Nova postagem!'}))
                    })
               })
     }
     /* return {
          type: ADD_POST,
          payload: post
     } */
}

export const addComment = payload => {
     return dispatch =>{
          axios.get(`/posts/${payload.postId}.json`)
               .catch(err => dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'})))
               .then(res => {
                    const comments = res.data.comments || []
                    comments.push(payload.comment)
                    axios.patch(`/posts/${payload.postId}.json`, { comments})
                    .catch(err => dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'})))
                    .then(res => {
                         dispatch(fetchPosts())
                    }) // Fazer uma atualização encima dos comments
               })
     }

/*      return {
          type: ADD_COMMENT,
          payload
     } */
}
export const setPosts = posts =>{
     return{
          type: SET_POSTS,
          payload: posts
     }
}

export const fetchPosts = () =>{
     return dispatch =>{
          axios.get("/posts.json")
          .catch(err => dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'})))
          .then(res =>{
               const rawPosts = res.data
               const posts = []
               for (let key in rawPosts){
                    posts.push({
                         ...rawPosts[key],
                         id: key
                    })
               }

               dispatch(setPosts(posts.reverse()))
          })
     }
}

export const creatingPost = () => {
     return {
          type: CREATING_POSTS
     }
}

export const postCreate = () => {
     return { 
          type: POST_CREATED
     }
}