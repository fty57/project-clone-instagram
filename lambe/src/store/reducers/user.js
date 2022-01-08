// Aqui você vai ouvir as alterações e mudar o estado eventualmente
import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from "../actions/actionTypes";

// Faz parte do estado global da minha aplicação
const initialState = {
     name: null,
     email: null,
     isLoading: false,
}

// Para cada ação eu terei uma forma de alterar o estado da minha aplicação
// "O estado não é alterado, é criado um estado com as alterações pertinentes"
// Um dos principios de programação funcional é não destruir o objeto 
const reducer = (state = initialState, action) => {
     switch (action.type) {
          case USER_LOGGED_IN: 
               return {
                    // Equivalente a clonar o objeto, também segurança
                    ...state, // Copia tudo
                    name: action.payload.name, // Modifica apenas os arquivos que deseja
                    email: action.payload.email,
                    
               }
          case USER_LOGGED_OUT: 
               return {
                    ...state,
                    name: null,
                    email: null
               }
          case LOADING_USER:
               return{
                    ...state,
                    isLoading: true
               }
          case USER_LOADED:
               return {
                    ...state,
                    isLoading: false
               }
          default:
               // Retorna o próprio estado atual
               return state
     }
}

export default reducer