import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native';

class HighlightsCard extends Component {
  constructor (props){
    super();
    this.handleGitClick = this.handleGitClick.bind(this);
    this.handleLNKDClick = this.handleLNKDClick.bind(this);
  }

  handleGitClick() {
    Linking.canOpenURL('https://www.github.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://www.github.com/');
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
  
  handleLNKDClick() {
    Linking.canOpenURL('https://www.linkedin.com/').then(supported => {
      if (supported) {
        Linking.openURL('https://www.linkedin.com/');
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.profileImg}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
        <View style={{flex:1}}>
          <Text style={styles.bigText}>Name</Text>
          <Text style={styles.bigText}>Industry</Text>
          <TouchableOpacity onPress={this.handleGitClick}>
            <Image 
              style={styles.iconImg}            
              source={{uri:'https://assets-cdn.github.com/favicon.ico'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLNKDClick}>
            <Image 
              style={styles.iconImg}            
              source={{uri:'https://www.iconfinder.com/data/icons/capsocial-round/500/linkedin-128.png'}}
            />
          </TouchableOpacity>          
          <Text style={styles.smallText}>-Education</Text>
          <Text style={styles.smallText}>-Professional</Text>
          <Text style={styles.smallText}>-Project</Text>
          <Text style={styles.smallText}>-Personal</Text>
        </View>
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  profileImg: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  },
  iconImg: {
    height: 20,
    width: 20,
    marginTop: 10,
    alignSelf: 'center'
  },
  bigText: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  }  
})

module.exports = HighlightsCard;