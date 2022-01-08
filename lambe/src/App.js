import React, { Component} from 'react'
import { Alert } from 'react-native'
import {connect} from 'react-redux'
import Navigator from './Navigator'
import { setMessage } from './store/actions/message'

class App extends Component {
     render(){
          return{
               <Navigator />
          }
     }
}

export default App