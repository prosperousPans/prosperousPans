import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage  
} from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal'

import { connect } from 'react-redux';
import { getMatches } from '../../actions/Matches';

import HighlightsCard from './HighlightsCard.js';
import ProfessionalCard from './ProfessionalCard.js';
import EducationCard from './EducationCard.js';
import ProjectCard from './ProjectCard.js';
import PersonalCard from './PersonalCard.js';
import PursumeModalForm from './PursumeModalForm.js';

import axios from 'axios';

class Matches extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false,
      allMatches: []
    }
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount')
    // this.props.fetch('USERIDHERE');
    axios.get('http://localhost:3000/users')
    .then( result => {
      const matchArr = result.data;
      console.log('matchArr', matchArr)
      for (var i=0; i<matchArr.length; i++){
        matchArr[i] = JSON.parse(matchArr[i]);
      }
      return matchArr;
    })
    .then( matchesResult => {
      var userId = [];
      var allExp = [];
      
      for (var i=0; i< matchesResult.length; i++) {
        var id = matchesResult[i].id;
        userId.push(matchesResult[i].id);
        axios.get('http://localhost:3000/experience', {params:{id: id}})
        .then(expResult => {
          console.log(expResult, 'RESULT FROM EXP GET')
          allExp.push(expResult)
        })
      }

      return [userId, allExp, matchesResult];
    })
    .then( params => {
      this.setState({
        userId: params[0],
        allExp: params[1],
        allMatches: params[2]
      });    
    })
  }
  
  _showModal() {
   this.setState({ isModalVisible: true }) 
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  handleModalSubmit () {
    console.log('INSIDE HANDLE MODAL SUBMIT')
    
    console.log(this.state.allMatches, 'all matches in modal submit - MATCHES')
    var oldArr = this.state.allMatches;

    var newArr = oldArr.slice(1);
    console.log(newArr,'newArr')
    this.setState({
      allMatches: newArr
    })
    this._hideModal();
  }

  render() {
    // AsyncStorage.getItem('AuthToken', (err, result) => {
    //   console.log('HELLOOO');
    // });
    {console.log(this.state.allMatches, 'IN RENDER') }
    if (this.state.allMatches.length > 0) {
      return(
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this._showModal}
              style={styles.pursumeButton}
            >
              <Text style={styles.text}>Pursumé</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible}>
              <TouchableOpacity
                onPress={this._hideModal}
              >
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <PursumeModalForm handleSubmit={this.handleModalSubmit}/>
              </View>
            </Modal>
          </View>

          <Swiper 
            height = {height*0.83}
            loop = {false}
            showsButtons={true}
          >
            <HighlightsCard exp={this.state.allExp} matches={this.state.allMatches}/>
            <EducationCard matches={this.state.allMatches}/>
            <ProfessionalCard matches={this.state.allMatches}/>
            <ProjectCard matches={this.state.allMatches}/>
            <PersonalCard matches={this.state.allMatches}/>
          </Swiper>

        </View>
      ) 
    } else {
      return (<View style={styles.card}><Text style={styles.text}>No More Matches</Text></View>)
    }
  }

};

export default Matches;
// const mapStateToProps = (state) => {
//   console.log('MATCHES STATE', state)
//   return {
//     ...state,
//     matches: state.Matches.allMatches
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetch: (userID) => { dispatch( getMatches(userID) ) }
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Matches);

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({ 
  buttonContainer: {
  },
  pursumeButton: {
    alignItems: 'center',     
    padding: 10,
    backgroundColor:'#97CAE5',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',  
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  }
});