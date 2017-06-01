import React, {Component} from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

import Login from './iosClient/src/Login';
import ProfileMain from './iosClient/src/ProfileMain';
import CustomTabs from './iosClient/src/CustomTabs';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  }
});

class PursumeIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Pursumé',
          component: Login
        }} />
    );
  }
}

AppRegistry.registerComponent('PursumeIOSApp', () => PursumeIOSApp);
      // <CustomTabs />