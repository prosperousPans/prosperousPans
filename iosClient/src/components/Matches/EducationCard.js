import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ExperienceItem from './ExperienceItem.js'
class EducationCard extends Component {
  render() {
    let currentProfileExp = this.props.matches[0][1][2];    
    return (
      <View style={styles.card}>
        <Text style={styles.bigText}>Education</Text>
        <Text style={styles.medText}>Organization: 
          <Text style={styles.smallText}>{currentProfileExp.organization}</Text>
        </Text>
        <Text style={styles.medText}>Role: 
          <Text style={styles.smallText}>{currentProfileExp.role}</Text>
        </Text>
        <Text style={styles.medText}>Description: 
          <Text style={styles.smallText}>{currentProfileExp.description}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigText: {
    justifyContent: 'center',    
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  medText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  }    
})

module.exports = EducationCard;