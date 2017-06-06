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

export class Matches extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false,
    }
    this.fetchMatch = this.fetchMatch.bind(this);
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.props.fetch('USERIDHERE');
    // this.fetchMatch();
  }

  fetchMatch() {
    axios.all([
      axios.get('http://localhost:3000/experience', {
        params: {name: 'education', users_id: 1}
      }),
      axios.get('http://localhost:3000/experience', {
        params: {name: 'professional', users_id: 1}
      }),
      axios.get('http://localhost:3000/experience', {
        params: {name: 'projects', users_id: 1}
      })
    ])
    .then(axios.spread( function (edu, prof, proj) {
      console.log(edu,'edu')
      console.log(prof,'prof')
      console.log(proj,'proj')
    }))
    .catch(error => console.log(error));

    // axios.get('http://localhost:3000/users')
    // .then( result => {
    //   const matchArr = result.data;
    //   console.log('matchArr', matchArr)
    //   this.setState({
    //     allMatches: matchArr
    //   });    
    // })    

  }
  
  _showModal() {
   this.setState({ isModalVisible: true }) 
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  handleModalSubmit () {
    // var oldArr = this.state.allMatches;
    // var newArr = oldArr.slice(1);

    // this.setState({
    //   allMatches: newArr
    // })
    this._hideModal();
    this.fetchMatch();
  }

  render() {
    // AsyncStorage.getItem('AuthToken', (err, result) => {
    //   console.log('HELLOOO');
    // });
    {console.log(this.props, 'IN MATCHES COMPONENT RENDER') }
    if (this.props.matches > 0) {
      return(
        <View>
          <View>

            <TouchableOpacity
              onPress={this._showModal}
              style={styles.pursumeButton}
            >
              <Text style={styles.pursumeButtonText}>Pursumé</Text>
            </TouchableOpacity>

            <Modal isVisible={this.state.isModalVisible}>
              <TouchableOpacity
                onPress={this._hideModal}
              >
                <Text style={styles.closeButton}>X</Text>
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
            <HighlightsCard />
            <EducationCard />
            <ProfessionalCard />
            <ProjectCard />
            <PersonalCard />
          </Swiper>

        </View>
      ) 
    } else {
      console.log('no more matches');
      return (<View style={styles.card}><Text style={styles.text}>No More Matches</Text></View>)
    }
  }

};

// export default Matches;
const mapStateToProps = (state) => {
  // console.log('MATCHES STATE', state)
  return {
    ...state,
    matches: state.Matches.allMatches
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (userID) => { dispatch( getMatches(userID) ) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({ 
  pursumeButton: {
    alignItems: 'center',     
    padding: 10,
    backgroundColor:'#2196F3',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pursumeButtonText: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center'    
  },
  closeButton: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',    
  }  
});