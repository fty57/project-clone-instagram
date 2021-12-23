import React from 'react';
import { View } from 'react-native'
import Navigation from './src/Navigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* No App.js retorna-se apenas as rotas */}
        <Navigator />
      </View>
    )
  }
}


