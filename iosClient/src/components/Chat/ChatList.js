import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  Image
} from 'react-native';
import Chat from './Chat';
import Separator from './Separator.js';

class ChatList extends Component {
  constructor (props){
    super();
    this.state = {
      chatConnections: []
    }
  }

  componentWillMount(){    
      AsyncStorage.getItem('userId')
      .then((userId) => {
          fetch("http://localhost:3000/chat-list?authId="+userId, {
            method: 'GET'//,
            // headers: {
            //   ‘Authorization’: ‘Bearer ‘+<idToken fetched from Asyncstorage>
            // }
          })
          .then((response) => {return response.json()})
          .then((responseJson) => {
            this.setState({chatConnections: responseJson});
          })
          .catch((error) => {
            console.error(error);
          });

          })
      .catch((e) => console.log(e));
  }

  goToChat(userDetails){
    this.props.navigator.push({
    component: Chat,
    title: 'Chat',
    passProps: {userDetails}
   });
  }
  
  render() {
    var chats = this.state.chatConnections;
    var list = chats.map((item, index) => {
      return (
        <View key={index}>
          <View style={styles.container} >
            <TouchableHighlight
              onPress={this.goToChat.bind(this, item)}
              underlayColor='transparent'>
              <View>
              <View style={styles.containerProfile} >
              <Image style={styles.image} source={{uri: item.image}}/>
              <Text style={styles.name}>{item.full_name}</Text>
              </View>
              <Separator/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      )
    })

    return(
      <ScrollView>
        {list}
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
    containerProfile:{
        flexDirection: 'row',
        marginLeft: 10,
        padding:5
    },
    container: {
      marginTop: 65,
      flex: 1
    },
    image:{
      height: 40,
      borderRadius: 20,
      width: 40,
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        fontSize: 18,
        paddingBottom: 5,
        paddingTop:5,
        paddingLeft:20,
        fontFamily: 'Avenir-Medium'
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    },
    text: {
      fontSize: 24,
      marginTop: 300,
      color: 'black',
      alignSelf: 'center'
  }
});

module.exports = ChatList;