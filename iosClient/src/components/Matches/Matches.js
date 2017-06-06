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
      currentIndex: 0
    }
    this.fetchMatch = this.fetchMatch.bind(this);
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
  }

  componentDidMount() {
    console.log('componentWillMount')
    this.fetchMatch();
    console.log('this.swiper', typeof Swiper)
  }

  fetchMatch() {
    console.log('INSIDE FETCH MATCH')
    this.props.fetch('USERIDHERE');
  }
  
  _showModal() {
   this.setState({ isModalVisible: true }) 
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  handleModalSubmit () {
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
            <HighlightsCard info={this.props.currentMatch}/>
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

            // <HighlightsCard />
            // <EducationCard />
            // <ProfessionalCard />
            // <ProjectCard />
            // <PersonalCard />