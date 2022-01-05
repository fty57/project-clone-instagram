import { createStore, combineReducers } from 'redux'

// Quando você faz o import, pode-se mudar o nome
import userReducer from './reducers/user'

// Agora o estado atual da nossa aplicação terá user e posts
import postsReducer from './reducers/posts'

const reducers = combineReducers({
     // Tudo que está dentro do userReducer, está agora dentro da chave global user
     user: userReducer,
     posts: postsReducer,
})

const storeConfig = () =>{
     return createStore(reducers)
}

// Retorna uma função que cria uma store
export default storeConfig
