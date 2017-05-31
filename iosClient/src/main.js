import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import Login from './Login.js';

class Main extends Component{
  constructor (props) {
    super(props);
  }
  navLogin(){
    this.props.navigator.push({
        title: 'Pursumé - Login',
        component: Login
    })
  }
  render() {
    return(
      <View style={styles.content}>
        <TouchableHighlight onPress={this.navLogin.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Main;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#48BBEC'
  },  
  buttonText: {
    fontSize: 24,
    margin: 5  ,
    alignSelf: 'center'
  }
});