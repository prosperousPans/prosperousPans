import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Chat extends Component {
  constructor (props){
    super();
  }
  
  render() {
    return (
      <View>
        <Text style={styles.text}>Chat</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginTop: 300,
    color: 'black',
    alignSelf: 'center'
  }
})

module.exports = Chat;