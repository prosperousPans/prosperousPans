import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import Card from './Card.js'

class Main extends Component{
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <Card />
    )
  }
};

module.exports = Main;