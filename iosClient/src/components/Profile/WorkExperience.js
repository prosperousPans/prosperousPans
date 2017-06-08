import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Separator from '../Utilities/Separator';


class WorkExperience extends Component{
  constructor (props) {
    super(props);
    this.state = {
      job: 'Test lead',
      at: 'Target Technologies'
    }
  }

  render(){
    var userInfo = this.props.data;
    return(
      (userInfo) ? <View style={styles.detailContainer}>
          <Text style={styles.rowTitle}>Education</Text><Text style={styles.content}>Add your Work Experience</Text><Text style={styles.addDetailsSymbol}>+</Text>
        </View> 
      :  
      <View>
        <View style={styles.detailContainer}>
          <Text style={styles.rowTitle}>Education</Text><Text style={styles.content}>{this.state.Job}</Text><Text style={styles.addDetailsSymbol}>+</Text>
        </View>
          <Text style={styles.rowContent}>{this.state.At}</Text>
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

module.exports = WorkExperience;