import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	Image
	 } from 'react-native';

var styles = StyleSheet.create({
    container: {
        height: 250,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        backgroundColor: 'transparent',
        color: 'white',
        fontFamily: 'Avenir-Medium',
        fontWeight: 'bold'
    },
    handle: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
        backgroundColor: 'transparent',
        fontFamily: 'Avenir-Medium'
    },
    image: {
        height: 130,
        width: 130,
        borderWidth: 2.8,
        borderColor: '#d6d7da',
        borderRadius: 65,
        marginTop: 5,
        alignSelf: 'center'
    }
});

class Badge extends Component{
	render(){
		return(
			<Image
      source={{uri: "https://avatars0.githubusercontent.com/u/25909813?v=3&s=460"}}
      style={styles.container}
      blurRadius={30}>
				<Image style={styles.image} source={{uri: "https://avatars0.githubusercontent.com/u/25909813?v=3&s=460"}} />
				<Text style={styles.name}>Lavanya Ammi Chandrashekara</Text>
				<Text style={styles.handle}>lavanyaac</Text>
			</Image>
			)
	}
}

module.exports = Badge;
