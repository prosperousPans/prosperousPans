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

import ExperienceItem from './ExperienceItem.js'
class PursumeModalForm extends Component {
  constructor (){
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
  }
  render() {
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.bigText}>Do you want to meet?</Text>
          <Text style={styles.medText}>Yes</Text>
          <Switch
            disabled={this.state.meetSwitchIsDisable}
            style={styles.switch}        
            onValueChange={(value) => {
              if (value) {
                this.setState({passSwitchIsDisable: true, meetSwitchIsOn: value})                
              } else {
                this.setState({passSwitchIsDisable: false, meetSwitchIsOn: value})                
              }
            }}
            value={this.state.meetSwitchIsOn} />
          
          <Text style={styles.medText}>No</Text>
          <Switch
            disabled={this.state.passSwitchIsDisable}          
            style={styles.switch}        
            onValueChange={(value) => {
              if (value) {
                this.setState({meetSwitchIsDisable: true, passSwitchIsOn: value})                
              } else {
                this.setState({meetSwitchIsDisable: false, passSwitchIsOn: value})                
              }
            }}
            value={this.state.passSwitchIsOn} />
        </View>
        <View>
          <Text style={styles.bigText}>Reason?</Text>
                    
          <Text style={styles.medText}>Professional</Text>
          <Switch
            onValueChange={(value) => this.setState({professionalSwitchIsOn: value})}
            style={styles.switch}                    
            value={this.state.professionalSwitchIsOn} />                      
          
          <Text style={styles.medText}>Project</Text>
          <Switch
            onValueChange={(value) => this.setState({projectSwitchIsOn: value})}
            style={styles.switch}        
            value={this.state.projectSwitchIsOn} />
          
          <Text style={styles.medText}>Personal</Text>
          <Switch
            onValueChange={(value) => this.setState({personalSwitchIsOn: value})}
            style={styles.switch}        
            value={this.state.personalSwitchIsOn} />            
        </View>
        <TouchableOpacity
          onPress={()=> {console.log(this.state, 'state all')}}
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
    marginTop: 20,
    alignItems: 'center',     
    padding: 10,
    color: '#fff',    
    fontSize: 15,
    fontWeight: 'bold',    
    backgroundColor:'#97CAE5',
  },
  switch: {
    alignSelf: 'center',  
  }
})

module.exports = PursumeModalForm;

