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
  }

  render(){
    if(this.props.workExperienceInfo && this.props.workExperienceInfo.data){
      var list = this.props.workExperienceInfo.data.map(function(workExperience, index){
        if(workExperience.name === 'professional'){
          return (
            <View key={index} style={styles.detailContainer} >
              <Text style={styles.orgContent}>{workExperience.organization}, </Text> 
              <Text style={styles.content}>{workExperience.role}</Text> 
            </View>
          )
        }
      })
    } 
    return(
      (this.props.workExperienceInfo && this.props.workExperienceInfo.data ) 
      ? 
      <View>
        <Text style={styles.rowTitle}>Previous Organizations</Text>
        {list}
      </View>
      :
      <View style={styles.detailContainer}>
        <Text style={styles.rowTitle}>WorkExperience\</Text><Text style={styles.content}>Add your Work Experience</Text><Text style={styles.addDetailsSymbol}>+</Text>
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
    orgContent:{
      fontSize: 13,
      fontFamily: 'Avenir-Medium',
      fontWeight: 'bold'
    }
});

module.exports = WorkExperience;