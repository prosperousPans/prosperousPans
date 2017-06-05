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
    console.log("const called");
    super();
    this.state = {
      chatConnections: []
    }
  }

  componentWillMount(){
    console.log("cwm called");
    
      AsyncStorage.getItem('userId')
      .then((userId) => {
          console.log('AUth id &&&&&&&',userId);

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
    console.log("gtc called", this, this.props, userDetails);
    this.props.navigator.push({
    component: Chat,
    title: 'Chat',
    passProps: {userDetails}
   });
  }
  
  render() {
    console.log("render called");
    var chats = this.state.chatConnections;
    console.log('from chats ', chats);
    var list = chats.map((item, index) => {
      //var desc = chats[index].description ? <Text style={styles.description}>{repos[index].description}</Text> : <View/>;
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
        height:55,
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