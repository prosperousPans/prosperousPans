import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions  
} from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal'


import HighlightsCard from './HighlightsCard.js';
import ProfessionalCard from './ProfessionalCard.js';
import EducationCard from './EducationCard.js';
import ProjectCard from './ProjectCard.js';
import PersonalCard from './PersonalCard.js';
import PursumeModalForm from './PursumeModalForm.js';

class Matches extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
  }
  _showModal() {
   this.setState({ isModalVisible: true }) 
   console.log('show modal')
  }
 
  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  render() {
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
              <PursumeModalForm />
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

module.exports = Matches;

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({ 
  buttonContainer: {
    // margin: 10,
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