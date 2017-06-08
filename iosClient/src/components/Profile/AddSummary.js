import React, { Component } from 'react';
import { 
	View, 
	Text,
  TextInput, 
	StyleSheet,
	TouchableHighlight
} from 'react-native';

class AddSummary extends Component{
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render(){
    var userInfo = this.props.data;
  	return(
      <View style={styles.container}>
          <Text style={styles.charDisplay}>250 left</Text>
          <View style={styles.summaryContainer}>
            <TextInput 
              style={styles.searchInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.setState({text})}
              placeholder= {'Introduce yourself and say what kind of people you\'d like to meet...' }
              placeholderTextColor='grey'
              value={this.state.text} />
          </View>
      </View>
  		);
  }
}

var styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 10,
      backgroundColor: '#F3F3F3'
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
    summaryContainer:{
      backgroundColor: '#FFFFFF'
    },
    searchInput: {
      height: 100,
      padding: 4,
      margin: 5,
      fontSize: 14,
      color: 'black',
      fontFamily: 'Avenir-Medium',
    },
    charDisplay:{
      height: 30,
      padding: 4,
      fontSize: 15,
      textAlign: 'right',
      fontFamily: 'Avenir-Medium',
    }
});


module.exports = AddSummary;