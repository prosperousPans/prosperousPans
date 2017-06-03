import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ExperienceItem extends Component {
  constructor (props){
    super();
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.medText}>Experience_</Text>
        <Text style={styles.smallText}>Organization</Text>
        <Text style={styles.smallText}>Role</Text>
        <Text style={styles.smallText}>Description</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  medText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold',
  }   
})

module.exports = ExperienceItem;