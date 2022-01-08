import { ADD_COMMENT, SET_POSTS, CREATING_POSTS, POST_CREATED} from '../actions/actionTypes'

const initialState = {
     posts: [],
     isUpdating: false,
}

const reducer = (state = initialState, action) => {
     switch (action.type) {
          case SET_POSTS:
               return {
                    ...state,
                    posts: action.payload
               }
          case ADD_COMMENT:
               return {
                    ...state,
                    posts: state.posts.map(post => {
                         if(post.id === action.payload.postId){
                              if(post.comments){
                                   post.comments = post.comments.concat(
                                        action.payload.comment
                                   )
                              }else{
                                   post.comments = [action.payload.comment]
                              }
                              
                         }
                         return post
                    })
               }
          case CREATING_POSTS:
               return {
                    ...state,
                    isUpdating: true
               }
          case POST_CREATED:
               return {
                    ...state,
                    isUpdating: false
               }
          default:
               // Para que ele não gere nenhum problema
               return state
     }
}

export default reducer