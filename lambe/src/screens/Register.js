import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Register extends Component {
     state = {
          name: '',
          email: '',
          password: '',
     }

     render(){
          return (
               <View style={styles.container}>
                    <TextInput placeholder='Nome' style={styles.input} autoFocus={true} value={this.state.name} onChangeText={name => this.setState({name})}/>
                    <TextInput placeholder='Email' style={styles.input} keyboardType='email-andress' value={this.state.email} onChangeText={email => this.setState({email})}/>
                    <TextInput placeholder='Senha' style={styles.input} secureTextInput={true} value={this.state.password} onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity onPress={()=> {}} style={styles.buttom}>
                         <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
               </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     buttom: {
          marginTop: 30,
          padding: 10,
          backgroundColor: '#4286f4'
     },
     buttomText: {
          fontSize: 20,
          color: '#FFF'
     },
     input: {
          //...commonStyles.input - Usando o operador spred
          marginTop: 30,
          width: '90%',
          backgroundColor: '#EEE',
          height: 40,
          borderWidth: 1,
          borderColor: '#333',
          paddingLeft: 15
     }
})
     
export default Register