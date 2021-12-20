import React from 'react';
import { View } from 'react-native'
import Feed from './src/screens/Feed'

export default class App extends React.Component {
  render() {
    const comments = [{
      nickname: 'Álisson Véras',
      comment: "Que foto bacana"
    }, {
      nickname: 'Rafael Silva',
      comment: "Eu faço uma melhor"
    }]

    return (
      <View style={{ flex: 1 }}>
        <Feed/>
      </View>
    )
  }
}


