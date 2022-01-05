import { ADD_COMMENT, ADD_POST } from '../actions/actionTypes'

const initialState = {
     posts: [{
          id: Math.random(),
          nickname: 'Marcus da Silva',
          email: 'marcusdasilva@gmail.com',
          image: require('../../../assets/img/cogumelo-700x525.jpg'),
          comments: [{
               nickname: 'John Ray Sheldon',
               comment: 'Stunning!'
          },{
               nickname: 'Ana Julia Arruda',
               comment: 'Foto Linda! Onde foi tirada?'
          }]
     }, {
          id: Math.random(),
          nickname: 'Francisco Leando Lima',
          email: 'fllima@gmail.com',
          image: require('../../../assets/img/pianist=700x1072.jpg'),
          comments: []
     }]
}

const reducer = (state = initialState, action) => {
     switch (action.type) {
          case ADD_POST:
               return {
                    ...state,
                    // Pegando todos os atributos que estão no payload dessa action e gerando um novo objeto para o posts
                    posts: state.posts.concat({
                         ...action.payload
                    })
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
          default:
               // Para que ele não gere nenhum problema
               return state
     }
}

export default reducer