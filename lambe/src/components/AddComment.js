import React, { Component} from 'react'
import { connect } from 'react-redux'
import { addComment} from '..store/actions/posts'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends Component{
     state={
          comment: '',
          editMode: false
     }

     handleAddComment = () => {
          this.props.onAddComment({
               postId: this.props.postId,
               comment: {
                    nickname: this.props.name,
                    comment: this.state.comment
               }
          })

          this.setState({comment: '', editMode: false})
     }

     render(){
          let commentArea = null
          if(this.state.editMode){
               /* Dessa maneira, caindo aqui pedindo um textInput para para em seguida submetê-lo */
               commentArea = (
                    <View style={styles.container}>
                         <TextInput placeholder='Pode comentar...'
                              style={styles.input} autoFocus={true}
                              valeu={this.state.comments}
                              onChangeText={comment => this.setState({comments})}
                              onSubmitEditing={this.handleAddComment} />
                         <TWF onPress={() => this.setState({editMode: false})}>
                              <Icon name='times' size={15} color="#555" />
                         </TWF>
                    </View>
               )
          } else{
               /* Quando você clickar no botão de adicionar um comentário, ele vai permitir a edição do mesmo */
               commentArea = (
                    <TWF onPress={() => this.setState({editMode: true})}>
                         <View style={styles.container}>
                              <Icon name='comment-o' size={25} color="#555" />
                              <Text style={styles.caption}>
                                   Adicionar um comentário...
                              </Text>
                         </View>
                    </TWF>
               )
          }
          return(
               /* Lembrando que ele sempre vai retornar os comentários do commentArea, mesmo que ele esteja nulo, quando não tiver comentário algum */
               <View style={{flex: 1}}>
                    {commentArea}
               </View>
          )
     }

}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10
     },
     caption: {
          marginLeft: 10,
          fontSize: 12,
          color: '#CCC'
     },
     input: {
          width: '90%',
     }
})

const mapStateToProps = ({ user }) => {
     return{ 
          name: user.name
     }
}

const mapDispatchToProps = dispatch => {
     return{
          onAddComment: payload => dispatch(addComment(payload))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)