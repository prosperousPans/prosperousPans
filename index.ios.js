import React, {Component} from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View,
} from 'react-native';

var Main = require('./iosClient/src/main');

var styles = StyleSheet.create({
    title: {
        marginTop: 150,
        fontSize: 25,
        textAlign: 'center',
        color: 'black'
    },
});

class PursumeIOSApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Hello World!!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('PursumeIOSApp', () => PursumeIOSApp);