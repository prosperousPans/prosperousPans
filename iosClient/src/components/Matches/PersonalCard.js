import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ExperienceItem from './ExperienceItem.js'
class PersonalCard extends Component {
  constructor (props){
    super();
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.bigText}>Personal</Text>
        <Text style={styles.smallText}>{this.props.matches[0].summary}</Text>
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
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 10,
    fontWeight: 'bold',
  }  
})

module.exports = PersonalCard;