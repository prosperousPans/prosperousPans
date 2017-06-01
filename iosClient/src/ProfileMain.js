import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Card from './Card.js'
import Dashboard from './Dashboard.js'

class ProfileMain extends Component{
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <View>
        <Card />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => console.log('pursume clicked!!')}
            style={styles.tab}
          >
            <Text>Pursume</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

module.exports = ProfileMain;

var styles = StyleSheet.create({ 
  buttonContainer: {
    marginTop: 10,
    height: 48,
  },
  tab: {
    alignSelf: 'center',   
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor:'#48BBEC'
  }
});