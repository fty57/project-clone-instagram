import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'

import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
     state = {
          image: null,
          comment: '',
     }
     /* Função responsável por pegar a imagem da galeria, ou de tirar a foto. Usando a biblioteca ImagePicker */
     pickImage = () =>{
          ImagePicker.showImagePicker({
               title: 'Escolha a imagem',
               maxHeight: 600,
               maxWidth: 800,
          }, res =>{
               if(!res.didCancel){
                    this.setState({ image: {uri: res.uri, base64: res.data}})
               }
          })
     }

     /* Futuramente fazer um método save */
     save = async () => {
          Alert.alert('Imagem adicionada', this.state.comment)
     }

     render(){
          return(
               
               <ScrollView>
                    <View style={styles.container}>
                         
                         <Text style={styles.title}>Compartilhe uma imagem</Text>

                         {/* Visualização da imagem escolhida */}
                         <View style={styles.imageContainer}>
                              <Image source={this.state.image} style={styles.image}/>
                         </View>

                         {/* Botão para "pegar" a imagem */}
                        <TouchableOpacity onPress={this.pickImage} style={styles.button}></TouchableOpacity> 
                         
                         {/* Para fazer algum comentário na própria foto. */}
                        <TextInput placeholder='Algum comentário para a foto?' style={styles.input} value={this.state.comment} onChangeText={comment => this.setState({comment})}/>

                         {/* Para enviar a foto selecionada */}
                        <TouchableOpacity onpress={this.save} style={styles.button}>
                              <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
               </ScrollView>
          )
          
     }
}

const styles = StyleSheet.create({
     container:{
          flex: 1,
          alignItems: 'center',
     }, 
     title: {
          fontSize: 20,
          marginTop: Plataform.OS === 'ios' ? 30: 10,
          fontWeight: 'bold',
     },
     imagemContainer: {
          width: '90%',
          height: Dimensions.get('window').width  / 2,
          backgroundColor: '#EEE', 
          marginTop: 10
     },
     image:{
          width: '100%',
          height: Dimensions.get('window').width / 2,
          resizeMode: 'center'
     },
     button: {
          marginTop: 30,
          padding: 10,
          backgroundColor: '#4286f4'
     },
     buttonText: {
          fontSize: 20,
          color: '#fff'
     },
     input: {
          marginTop: 20,
          width: '90%'
     }
})

export default AddPhoto