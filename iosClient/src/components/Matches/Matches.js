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
import { sendResponse } from '../../actions/Pursume';

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
      currentIndex: 0
    }
    this.fetchMatch = this.fetchMatch.bind(this);
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
  }

  componentDidMount() {
    this.fetchMatch();
  }

  fetchMatch() {
    this.props.fetch('_USERIDHERE');
  }
  
  _showModal() {
   this.setState({ isModalVisible: true }) 
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  handleModalSubmit (response) {
    let users_a_id = 4;
    let users_b_id = this.props.currentMatch.id;

    // let status = '';
    // let reasonsArr = [];
    // let reasonsWriteArr = [];
    // response.meetSwitchIsOn ? status = 'accept' : status = 'reject';
    // response.professionalSwitchIsOn ? reasonsArr.push(1) : false;
    // response.educationSwitchIsOn ? reasonsArr.push(2) : false;
    // response.projectSwitchIsOn ? reasonsArr.push(3) : false;
    // response.personalSwitchIsOn ? reasonsArr.push(4) : false;

    // console.log('reasons', 'reasonsARR' , status, reasonsArr)

    // reasonsArr.map( (reason_id) => {reasonsWriteArr.push(
    //   axios.post('http://localhost:3000/insert-reason', {
    //     connection_id: 20,
    //     reason_id: reason_id
    //   })
    // )})
    // console.log('reasonsWriteArr' , reasonsWriteArr)

    // axios.all(reasonsWriteArr)
    // .then(axios.spread( () => {
    //   console.log('INSIDE SPREAD')
    //   console.log('results', arguments)
    // })).catch( (error) => console.log(error, 'ERROR FROM AXIOS ALL'))


    // axios.post('http://localhost:3000/insert-reason', {
    //   connection_id: 20,
    //   reason_id: 3
    // }).then( result => {
    //   console.log('ISERT REASON result', result);
    // })

    this.props.pursume(response, users_a_id, users_b_id)

    this._hideModal();
    this.fetchMatch();
    this.refs.slider.scrollBy(this.state.currentIndex * -1)
  }

  _onMomentumScrollEnd(e, state, context) {
    this.state.currentIndex = state.index;    
  }  

  render() {
    // AsyncStorage.getItem('AuthToken', (err, result) => {
    //   console.log('HELLOOO');
    // });
    // {console.log(this.props, 'IN MATCHES COMPONENT RENDER') }
    if (this.props.currentMatchProjExp) {
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
            ref="slider"
            onMomentumScrollEnd={this._onMomentumScrollEnd}
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

const mapStateToProps = (state) => {
  return {
    ...state,
    currentMatch: state.Matches.allMatches,
    currentMatchProfExp: state.Matches.professionalExp,
    currentMatchEduExp: state.Matches.educationExp,
    currentMatchProjExp: state.Matches.projectExp
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (userID) => { dispatch( getMatches(userID) ) },
    pursume: (response, users_a_id, users_b_id) => { dispatch( sendResponse(response, users_a_id, users_b_id) ) }
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