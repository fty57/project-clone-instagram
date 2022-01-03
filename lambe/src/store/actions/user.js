import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

// Uma função que está retornando uma action
export const login = user => {
     return{
          type: USER_LOGGED_IN,
          payload: user
     }
}

// Action é um objeto
// Você é obrigado a usar o type, mas o payload é convencional e opcional
// Logout não precisa de payload
export const logout = () => {
     return {
          type: USER_LOGGED_OUT,
     }
}