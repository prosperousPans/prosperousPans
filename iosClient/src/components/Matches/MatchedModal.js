import React, {Component} from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Switch,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { sendResponse } from '../../actions/Pursume';
import { getMatches } from '../../actions/Matches';

import ExperienceItem from './ExperienceItem.js'

class MatchedModal extends Component{
  constructor (props){
    super();
    this.state = {
      meetSwitchIsOn: false,
      meetSwitchIsDisable: false,
      passSwitchIsOn: false,
      passSwitchIsDisable: false,
      educationSwitchIsOn: false,
      professionalSwitchIsOn: false,
      projectSwitchIsOn: false,
      personalSwitchIsOn: false,
    };
    this.formSubmit =  this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.bigText}>They want to meet you too!</Text>
        </View>
        <TouchableOpacity
          onPress={this.formSubmit}
        >
          <Text style={styles.submitButton}>Go to chat!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MatchedModal;

const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: height*0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  pursumeButton: {
    alignItems: 'center',     
    padding: 10,
    backgroundColor:'#2196F3',
  },  
  submitButton: {  
    marginTop: 20,
    alignItems: 'center',     
    padding: 10,
    color: '#fff',    
    fontSize: 15,
    fontWeight: 'bold',    
    backgroundColor:'#2196F3',
  },
  switch: {
    alignSelf: 'center',  
  }
})


