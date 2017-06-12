import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	TouchableHighlight,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import Separator from '../Utilities/Separator';
import axios from 'axios';

class AddTags extends Component{
  constructor (props) {
    super(props);
    this.state = {
      tags:[],
      text: ''
    }
  }

  async addTagDetails(){
    console.log("inside addTagDetails")
    try {  
      await AsyncStorage.getItem('userId', (err, result) => {
        console.log('asyncstorage result from ADD tags ********', result);
        axios.post('http://localhost:3000/profile-user/add-tag', {
          authid: result,
          text: this.state.text
        })
        .then( result => {
          console.log('Add Tag results:',result);
        })
        .catch( error => {
          console.log('error: ', error);
        })
      })
    }catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  async deleteTagDetails(tag){
    console.log("inside deleteTagDetails")
    try {  
      await AsyncStorage.getItem('userId', (err, result) => {
        console.log('asyncstorage result from delete tags ********', result);
        axios.post('http://localhost:3000/profile-user/delete-tag', {
          authid: result,
          tag: tag.tag
        })
        .then( result => {
          console.log('Delete Tag results:',result);
        })
        .catch( error => {
          console.log('error: ', error);
        })
      })
    }catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  componentWillMount(){
    if(this.props.tagInfo && this.props.tagInfo.data){
      this.setState({
        tags: this.props.tagInfo.data
      })
    }
  }

  handleChange(event){
    console.log('Handle Change', event.nativeEvent.text)
    this.setState({
      text: event.nativeEvent.text
    })
  }

  handleCancel(event){
    this.setState({
      text: ''
    })
  }

  handleDeleteTags(tag){
    console.log(tag);
    this.deleteTagDetails(tag);
  }

  handleOk(event){
    console.log('Handle Ok',this.state.text);
    this.addTagDetails();
  }

  render(){
    var TagsVerbiage = "Help us show you relevant matches! Enter your fields, skills or passions";
    var tagValues = this.state.tags;
    var context= this;
    var list = tagValues.map(function(tag, index){

      if(tagValues.length === 0){
        return <View key={index}/>
      } else {
        return (
          <View key={index} >
            <View style={styles.tagRowContainer}>
              <View style={styles.tagContainer}><Text>#</Text><Text style={styles.tagContent}>{tag.tag}</Text></View>
              <TouchableHighlight onPress={ ()=>{context.handleDeleteTags(tag)}}>
              <Text style={styles.deleteTag}>Delete</Text>
              </TouchableHighlight>
            </View>
            <Separator/>  
          </View>
        )
      }
    })
  	return(
      <View style={styles.container}>
        <Text style={styles.TagsVerbiage}>{TagsVerbiage}</Text>
        <View style={styles.tagsContainer}>
          <TextInput 
          style={styles.searchInput}
          placeholder={'# Enter a single keyword'}
          value={this.state.text}
          onChange={this.handleChange.bind(this)} />
          <View style={styles.tagRowContainer}>
            <Button
              onPress={this.handleCancel.bind(this)}
              title="Cancel"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={this.handleOk.bind(this)}
              title="Ok"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          {list}
        </View>
      </View>
  		);
  }
}

var styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 5,
      backgroundColor: '#F2F2F2'
    },
    tagContainer:{
      flexDirection: 'row',
      margin: 5,
      padding:8,
      justifyContent: 'space-between'
    },
    tagRowContainer:{
      flexDirection: 'row',
      margin: 5,
      padding:8,
      justifyContent: 'space-between'
    },
    tagsContainer:{
      backgroundColor: '#FFFFFF'
    },
    deleteTag:{
      color: 'red',
      marginRight: 5
    },
    tagContent:{
      marginLeft: 10,
    },
    TagsVerbiage:{
      margin: 8,
      padding: 5,
      backgroundColor: '#FFFFFF',
      fontFamily: 'Avenir-Medium',
      fontSize: 12,
      borderWidth: 1,
      borderColor: '#F2F2F2',
      borderRadius: 8,
    },
    searchInput: {
      height: 35,
      padding: 4,
      margin: 5,
      fontSize: 14,
      borderWidth: 1,
      borderColor: '#F2F2F2',
      borderRadius: 8,
      color: 'black'
    },
});

module.exports = AddTags;