import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import ExperienceItem from './ExperienceItem.js'

export class EducationCard extends Component {
  render() {
    let currentMatchEduExp = this.props.currentMatchEduExp.data;
    return (
      <View>
        <Text style={styles.bigText}>Education</Text>
        {currentMatchEduExp.map( (exp)=> <ExperienceItem key={exp.id} exp={exp}/> )}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    currentMatchEduExp: state.Matches.educationExp
  }
};

export default connect(mapStateToProps)(EducationCard);

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