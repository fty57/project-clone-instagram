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
     