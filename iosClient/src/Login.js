import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	TextInput,
	TouchableHighlight,
	AsyncStorage
 } from 'react-native';

import Main from './Main.js'
import Auth0Lock from 'react-native-lock';
var credentials = require('../../config/config.js');
var lock = new Auth0Lock(credentials.auth0);

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#82C1C2'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    userInput: {
        height: 50,
        padding: 4,
        margin: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 15,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

class Login extends Component{
	constructor(props){
		super(props);
	}

	async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
    }

	_onLogin(){
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
    	this._onValueChange('AuthToken', token.idToken)
    	this.props.navigator.push({
				component: Main,
				title: 'Main'
			});
  	});
	}

	render(){
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}> Login Page </Text>
				<TouchableHighlight 
					style={styles.button} 
					onPress={this._onLogin.bind(this)}
					underlayColor="white">
						<Text style={styles.buttonText}> Login </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

module.exports = Login;