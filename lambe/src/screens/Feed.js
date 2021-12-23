import React, { Component } from 'react'
import { StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {
     /* Vai servir como comentários temporários, se bem a biblioteca do Semantic UI é bem prática */
     state = {
          posts: [{
               id: Math.random(),
               nickname: 'Marcus da Silva',
               email: 'marcusdasilva@gmail.com',
               image: require('../../../assets/img/cogumelo-700x525.jpg'),
               comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Stunning!'
               },{
                    nickname: 'Ana Julia Arruda',
                    comment: 'Foto Linda! Onde foi tirada?'
               }]
          }, {
               id: Math.random(),
               nickname: 'Francisco Leando Lima',
               email: 'fllima@gmail.com',
               image: require('../../../assets/img/pianist=700x1072.jpg'),
               comments: []
          }]
     }

     render(){
          return(
               <View style={styles.container}>
                    <Header/>
                    {/* Sempre lembrar que o FlatList pede um keyExtractor */}
                    {/* E também a forma como ele vai renderizar os itens dentro dele, nesse caso os posts */}
                    <FlatList
                         data={this.state.posts}
                         keyExtractor={item => `${item.id}`}
                         renderItem={({item}) => 
                         <Post key={item.id} {...item}/>}
                    />
               </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF'
     }
})

export default Feed