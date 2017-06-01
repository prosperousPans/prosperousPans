import React, {Component} from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import Login from './iosClient/src/Login';
import Main from './iosClient/src/Main';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  }
});

class PursumeIOSApp extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('PursumeIOSApp', () => PursumeIOSApp);
      // <NavigatorIOS
      //   style={styles.container}
      //   initialRoute={{
      //     title: 'Pursumé',
      //     component: Login
      //   }} />