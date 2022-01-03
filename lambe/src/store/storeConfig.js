import { createStore, combineReducers } from 'redux'

// Quando você faz o import, pode-se mudar o nome
import userReducer from './reducers/user'

const reducers = combineReducers({
     // Tudo que está dentro do userReducer, está agora dentro da chave global user
     user: userReducer,
})

const storeConfig = () =>{
     return createStore(reducers)
}

// Retorna uma função que cria uma store
export default storeConfig
