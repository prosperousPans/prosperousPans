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

export class Matches extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }

  componentWillMount() {
    // console.log('this.props', this.props)
    this.props.fetch('USERIDHERE');
  }
  
  _showModal() {
   this.setState({ isModalVisible: true }) 
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  handleModalSubmit () {
    console.log('INSIDE HANDLE MODAL SUBMIT')
    this._hideModal();
  }

  render() {
    // AsyncStorage.getItem('AuthToken', (err, result) => {
    //   console.log('HELLOOO');
    // });
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
              <PursumeModalForm bob={this.handleModalSubmit}/>
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
  }
};

const mapStateToProps = (state) => {
  console.log('MATCHES STATE', state)
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
  buttonContainer: {
  },
  pursumeButton: {
    alignItems: 'center',     
    padding: 10,
    backgroundColor:'#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }  
});