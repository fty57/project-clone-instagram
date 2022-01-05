import React, { Component } from 'react'
import {connect } from 'react-redux'
import { StyleSheet, FlatList, View} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {
     /* Vai servir como comentários temporários, se bem a biblioteca do Semantic UI é bem prática */
/*      state = {
          
     } */

     render(){
          return(
               <View style={styles.container}>
                    <Header/>
                    {/* Sempre lembrar que o FlatList pede um keyExtractor */}
                    {/* E também a forma como ele vai renderizar os itens dentro dele, nesse caso os posts */}
                    <FlatList
                         data={this.props.posts}
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

// export default Feed

const mapStateToProps = ({ posts }) =>{
     return {
          posts: posts.posts
     }
}

export default connect(mapStateToProps)(Feed)