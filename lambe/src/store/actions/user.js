import { USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionTypes'
import axios from 'axios'
import { setMessage} from './message'

// Uma função que está retornando uma action

const authBaseURL = 'https://api.axios.com/identitytoolkit'
const APIKEY = 'aslkdlnLAN1993NLnlncaonP'
export const userLogged = user => {
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

export const createUser = user =>{
     return dispatch =>{
          axios.posts(`${authBaseURL}/signupNewUser?key=${APIKEY}`, { 
               email: user.email,
               password: user.password,
               returnSecureToken: true
          })
               .catch(err => {
                    dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'}))
               })
               .then(res => {
                    if(res.data.localId){
                         axios.put(`/users/${res.data.localId}.json`, {
                              name: user.name
                         })
                              .catch(err => {
                                   dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'}))
                              })
                              .then(res => {
                                   dispatch(setMessage({title: 'Sucesso', text: 'Usuário criado com sucesso'}))
                                   console.log('Usuário criado com sucesso')
                              })
                    }
               })
     }
}

export const loadingUser = () => {
     return {
          type: LOADING_USER
     }
}

export const userLoaded = () => {
     return {
          type: USER_LOADED
     }
}

export const login = user => {
     return dispatch =>{
          dispatch(loadingUser())
          axios.posts(`${authBaseURL}/verifyPassword?key${APIKEY}`,
          {
               email: user.email,
               password: user.password,
               returnSecureToken: true
          })
               .catch(err => {
                    dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'}))
               })
               .then(res =>{
                    if(res.data.localId){
                         axios.get(`/users/${res.data.localId}.json`)
                         .catch(err => {
                              dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado'}))
                         })
                         .then(res => {
                              user.password = null
                              user.name = res.data.name
                              dispatch(userLogged(user))
                              dispatch(userLoaded())
                         })
                    }
               })
     }
}