import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class Summary extends Component{
  constructor (props) {
    super(props);
  }

  render(){
    var userInfo = this.props.data;
    return(
      (userInfo) ? <View/> :  
        <View style={styles.detailContainer}>
            <Text style={styles.rowTitle}>Add a short, friendly bio</Text><Text style={styles.addDetailsSymbol}>+</Text>
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

    },
    rowTitle: {
      color: 'grey',
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
      fontSize: 17,
      fontFamily: 'Avenir-Medium'
    }
});

module.exports = Summary;