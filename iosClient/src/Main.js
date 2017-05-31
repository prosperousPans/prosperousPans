import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Card from './Card.js'
import Dashboard from './Dashboard.js'

class Main extends Component{
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            console.log('dash click')
            this.props.navigator.push({
              title: 'Dashboard', 
              component: Dashboard,
            })
          }}
          underlayColor="#88D4F5"
        >
          <Text style={styles.buttonText}>View Dashboard</Text>
        </TouchableHighlight>
        <Card />
      </View>
    )
  }
};

module.exports = Main;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#48BBEC'
  },  
  buttonText: {
    fontSize: 24,
    margin: 5  ,
    alignSelf: 'center'
  }
});