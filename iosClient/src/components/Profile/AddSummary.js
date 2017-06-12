import React, { Component } from 'react';
import { 
	View, 
	Text,
  TextInput, 
	StyleSheet,
	TouchableHighlight,
  Button,
  AsyncStorage
} from 'react-native';
import axios from 'axios';

class AddSummary extends Component{
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentWillMount(){
    if(this.props.summaryInfo && this.props.summaryInfo.data){
      this.setState({
        text: this.props.summaryInfo.data.summary
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

  handleOk(event){
    console.log('Handle Ok',this.state.text)
    this.addSummaryDetails();
  }

  async addSummaryDetails(){
    console.log("inside addTagDetails")
    try {  
      await AsyncStorage.getItem('userId', (err, result) => {
        console.log('asyncstorage result from ADD Summary ********', result);
        axios.post('http://localhost:3000/profile-user/add-summary', {
          authid: result,
          text: this.state.text
        })
        .then( result => {
          console.log('Add Summary results:',result);
        })
        .catch( error => {
          console.log('error: ', error);
        })
      })
    }catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }


  render(){
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
      color: '#525050',
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