import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import ExperienceItem from './ExperienceItem.js'
class PursumeModalForm extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.bigText}>Do you want to meet?</Text>
        <Text style={styles.medText}>Yes</Text>
        <Text style={styles.medText}>No</Text>
        <Text style={styles.bigText}>Reason?</Text>
        <Text style={styles.medText}>Professional</Text>
        <Text style={styles.medText}>Education</Text>
        <Text style={styles.medText}>Project</Text>
        <TouchableOpacity
          onPress={()=> {console.log('PursumeModalForm Submit')}}
        >
          <Text style={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: height*0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5   
  },
  bigText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  medText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  submitButton: {  
    alignItems: 'center',     
    padding: 10,
    color: '#fff',    
    fontSize: 15,
    fontWeight: 'bold',    
    backgroundColor:'#97CAE5',
  },  
})

module.exports = PursumeModalForm;