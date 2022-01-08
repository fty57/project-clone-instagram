import React from 'react'
import { Provider } from 'react-redux' // Envolver toda a aplicação dentro desse componente Provider
import { View } from 'react-native'
import { setMessage } from './store/actions/message'

import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'http://projeto-clone-instagram.firebaseio.com/'

const store = storeConfig()
const Redux = () => {
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  </Provider>
}
// O ponto raiz agora é o componente Provider

export default class App extends React.Component {
  componentDidUpdate = () =>{
    if(this.props.text && this.props.text.toString().trim()){
      Alert.alert(this.props.title || "Mensagem", this.props.text.toString())
      this.props.clearMessage()
    }
  }

  render() {
    return (
      <Redux/>
    )
  }
}

const mapStateToProps = ({ message}) =>{
  return{
    title: message.title,
    text: message.text
  }
}

const mapDispatchToProps = dispatch => {
  return{
    clearMessage: () => 
    dispatch(setMessage({title: '', text: ''}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


