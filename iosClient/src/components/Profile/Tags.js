import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	TouchableHighlight
} from 'react-native';

class Tags extends Component{
  constructor (props) {
    super(props);
  }

  render(){
    var userInfo = this.props.data;
  	return(
      (userInfo) ? <View/> :  
      <View>
        <View style={styles.detailContainer}>
						<Text style={styles.rowTitle}>Tags</Text><Text style={styles.addDetailsSymbol}>+</Text>
        </View>
          <Text style={styles.rowContent}>Tags Content</Text>
      </View>
  		);
  }
}

var styles = StyleSheet.create({
    container:{
      fontFamily: 'Avenir-Medium'
    },
    detailContainer: {
      flexDirection:'row', 
      flexWrap:'wrap',
      justifyContent: 'space-between'
    },
    rowTitle: {
      color: 'orange',
      fontSize: 16,
      fontFamily: 'Avenir-Medium'
    },
    addDetailsSymbol: {
      color: 'orange',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'right',
      fontFamily: 'Avenir-Medium'
    },
    rowContent: {
      fontSize: 15,
      fontFamily: 'Avenir-Medium',
      padding: 5,
    }
});

module.exports = Tags;