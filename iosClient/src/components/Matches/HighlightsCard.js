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
import { connect } from 'react-redux';
import { getMatches } from '../../actions/Matches';

export class HighlightsCard extends Component {
  constructor (props){
    super();
    this.handleGitClick = this.handleGitClick.bind(this);
    this.handleLNKDClick = this.handleLNKDClick.bind(this);
  }

  handleGitClick() {
    Linking.canOpenURL('https://www.github.com/').then(supported => {
      if (supported) {
        var url = this.props.matches[0].github_url        
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
  
  handleLNKDClick() {
    Linking.canOpenURL('https://www.linkedin.com/').then(supported => {
      if (supported) {
        var url = this.props.matches[0].linkedin_url
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }

  render() {
    // if (this.props.matches) {  
      let currentProfile = this.props.matches[0];
      let currentProfileExp = this.props.exp;
      console.log(currentProfileExp, 'currentProfile');
      return (
        <View style={styles.card}>
          <Image
            style={styles.profileImg}
            source={{uri: currentProfile.image}}
          />
          <View style={{flex:1}}>
            <Text style={styles.bigText}>{currentProfile.full_name}</Text>
            <Text style={styles.smallText}>{currentProfile.industry}</Text>
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
    // } 
    // else {
    //   return (
    //     <View>
    //       <Text style={styles.text}>No matches left today</Text>
    //     </View>
    //   )
    // }
  }
}

export default HighlightsCard;

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//     matches: state.Matches.allMatches
//   }
// };

// export default connect(mapStateToProps)(HighlightsCard);

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
  },
  text: {
    fontSize: 24,
    marginTop: 300,
    color: 'black',
    alignSelf: 'center'
  }  
})



