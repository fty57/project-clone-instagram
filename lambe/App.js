import React from 'react'
import { Provider } from 'react-redux' // Envolver toda a aplicação dentro desse componente Provider
import { View } from 'react-native'

import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'

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
  render() {
    return (
      <Redux/>
    )
  }
}


