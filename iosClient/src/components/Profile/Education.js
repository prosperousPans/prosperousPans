import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Separator from '../Utilities/Separator';


class Education extends Component{
  constructor (props) {
    super(props);
  }

  render(){
    if(this.props.educationInfo && this.props.educationInfo.data ){
      var list = this.props.educationInfo.data.map(function(education, index){
        if(education.name === 'education'){
          return (
            <View key={index} style={styles.detailContainer} >
              <Text style={styles.orgContent}>{education.organization}, </Text> 
              <Text style={styles.content}>{education.role}</Text> 
            </View>
          )
        }
      })
    } 
    return(
      (this.props.educationInfo && this.props.educationInfo.data ) 
      ? 
      <View>
        <Text style={styles.rowTitle}>Education</Text>
        {list}
      </View>
      :
      <View style={styles.detailContainer}>
          <Text style={styles.rowTitle}>Education</Text><Text style={styles.content}>Add your education</Text><Text style={styles.addDetailsSymbol}>+</Text>
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
      fontSize: 13,
      fontFamily: 'Avenir-Medium'
    },
    detailContainer: {
      flexDirection:'row', 
      flexWrap:'wrap'
    },
    orgContent:{
      fontSize: 13,
      fontFamily: 'Avenir-Medium',
      fontWeight: 'bold'
    }
});

module.exports = Education;