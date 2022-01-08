import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Quando você faz o import, pode-se mudar o nome
import userReducer from './reducers/user'

// Agora o estado atual da nossa aplicação terá user e posts
import postsReducer from './reducers/posts'

import messageReducer from './reducers/message'

const reducers = combineReducers({
     // Tudo que está dentro do userReducer, está agora dentro da chave global user
     user: userReducer,
     posts: postsReducer,
     message: messageReducer,
})

const storeConfig = () =>{
     return createStore(reducers, compose(applyMiddleware(thunk)))
}

// Retorna uma função que cria uma store
export default storeConfig
