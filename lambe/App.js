import React from 'react';
import { View } from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

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
        <Header />
        <Post image={require('./assets/img/chaleira-894x894.jpg')} comments={comments} />
      </View>
    )
  }
}


