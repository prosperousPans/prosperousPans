import React, {Component} from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NavigatorIOS,
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

import Matches from './Matches/Matches.js';
import Dashboard from './Dashboard/Dashboard.js';
import Chat from './Chat/Chat.js';

const MatchesScreen = () => (
  <Matches />
);


const DashboardScreen = () => (
  <Dashboard />
);

const ChatScreen = () => (
  <Chat />
);

const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state;
  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >     
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);
  return (
    <View style={styles.container}>
      <CustomTabBar navigation={navigation} />
      <View style={styles.divider}></View>
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index],
        })}
      />
    </View>
  );
};

const CustomTabRouter = TabRouter(
  {
    Dashboard: {
      screen: DashboardScreen,
      path: 'dashboard',
    },
    Home: {
      screen: MatchesScreen,
      path: '',
    },
    Chat: {
      screen: ChatScreen,
      path: 'chat',
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Home',
  }
);

const Main = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },  
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    margin: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
  }  
});

export default Main;