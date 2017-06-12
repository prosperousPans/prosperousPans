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
var credentials = require('../../../config/config.js');
var lock = new Auth0Lock(credentials.auth0);

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        marginTop: 35,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        marginBottom: 50,
        fontSize: 50,
        textAlign: 'center',
        color: '#2196F3',
        fontFamily: 'Avenir-Medium'
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
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center'
    },
    button: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#2196F3',
        borderColor: '#54B2F5',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 15,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems:'center'
    },
});

class Login extends Component{
	constructor(props){
		super(props);
	}

	async _onValueChange(profile,token) {
    try {  
      await AsyncStorage.multiSet([['AuthToken', token],['nickname',profile.nickname],['userId',profile.userId],['picture', profile.picture]]);
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
      console.log(profile);
    	this._onValueChange(profile,token.idToken);
    	this.props.navigator.push({
				component: Main,
				title: 'Main'
		});
  	});
	}

    // _onLogin_Local(){

    //     this._onValueChange({
    //         userId:"auth0%7C592e5a4f8fb5fe30a672ce8b",
    //         AuthToken:"",
    //         nickname:"",
    //         picture:""
    //     },"undefined");
    //     this.props.navigator.push({
    //             component: Main,
    //             title: 'Main'
    //     });
   
    // }

	render(){
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}> Pursumè </Text>
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


// <TouchableHighlight 
//                     style={styles.button} 
//                     onPress={this._onLogin_Local.bind(this)}
//                     underlayColor="white">
//                         <Text style={styles.buttonText}> Login </Text>
//                 </TouchableHighlight>