import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	TouchableHighlight,
  TextInput
} from 'react-native';
import Separator from '../Utilities/Separator';

class AddTags extends Component{
  constructor (props) {
    super(props);
    this.state = {
      tags:['React', 'Angular', 'Nodejs']
    }
  }
  handleChange(event){
    console.log(event.nativeEvent.text)
  }

  render(){
    var TagsVerbiage = "Help us show you relevant matches! Enter your fields, skills or passions";
    var tagValues = this.state.tags;
    var list = tagValues.map(function(tag, index){
      if(tagValues.length === 0){
        return <View key={index}/>
      } else {
        return (
          <View key={index} >
            <View style={styles.tagRowContainer}>
              <View style={styles.tagContainer}><Text>#</Text><Text style={styles.tagContent}>{tag}</Text></View>
              <TouchableHighlight><Text style={styles.deleteTag}>Delete</Text></TouchableHighlight>
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
            value={this.state.username}
            onChange={this.handleChange.bind(this)} />
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