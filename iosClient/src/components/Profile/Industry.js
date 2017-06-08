import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Separator from '../Utilities/Separator';


class Industry extends Component{
  constructor (props) {
    super(props);
    this.state = {
      industry: 'Technology'
    }
  }

  render(){
    var userInfo = this.props.data;
    return(
      (userInfo) ? <View/> :  
      <View style={styles.detailContainer}>
        <Text style={styles.rowTitle}>My Industry</Text><Text style={styles.content}>{this.state.industry}</Text><Text style={styles.addDetailsSymbol}>+</Text>
      </View>
      );
  }
}

var styles = StyleSheet.create({
    container:{
      fontFamily: 'Avenir-Medium'
    },
    rowTitle: {
      color: 'orange',
      fontSize: 16,
      fontFamily: 'Avenir-Medium'
    },
    detailContainer: {
      flexDirection:'row', 
      flexWrap:'wrap',
      justifyContent: 'space-between'
    },
    addDetailsSymbol: {
      color: 'orange',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'right',
      fontFamily: 'Avenir-Medium'
    },
    content: {
      fontSize: 15,
      fontFamily: 'Avenir-Medium'
    }
});

module.exports = Industry;