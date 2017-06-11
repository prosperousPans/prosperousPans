import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import Separator from '../Utilities/Separator';
import axios from 'axios';


class AddIndustry extends Component{
  constructor (props) {
    super(props);
    this.state = {
      industry: '',
      selectedIndustry:this.props.industryInfo && this.props.industryInfo.data ?this.props.industryInfo.data.vertical:''
    }
  }

  updateIndustry(industry){
    this.setState({
      'selectedIndustry': industry
    });
    this.updateIndustryDetails();
  }

  async updateIndustryDetails(){
    console.log("inside updateIndustryDetails:")
    try {  
      await AsyncStorage.getItem('userId', (err, result) => {
        console.log('asyncstorage result from update Industry ********', result);
        axios.post('http://localhost:3000/profile-user/update-Industry', {
          authid: result,
          industry: this.state.selectedIndustry
        })
        .then( result => {
          console.log('Add Industry results:',result);
        })
        .catch( error => {
          console.log('error: ', error);
        })
      })
    }catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render(){
    var userInfo = this.props.data;
    var industryValues = ['Technology', 'BioMedical', 'Education', 'Finance/Banking', 'Retail/Ecommerce', 'Leisure/Travel', 'Gaming', 'Hardware', 'Enterprise Software/SAAS', 'Social', 'Service', 'Other'];
    var context = this;
    var list = industryValues.map(function(industry, index){
      if(industryValues.length === 0){
        return <View key={index}/>
      } else {
        return (
          <View key={index} style={styles.content} >
            <TouchableHighlight
            onPress={ context.updateIndustry.bind(context, industry) }
            underlayColor='transparent'
            ><View style={styles.industryContainer}>
            <Text style={styles.content}>{industry}</Text>
            { context.state.selectedIndustry == industry && <View ><Text style={styles.content}>✔</Text></View>}
            </View>
            </TouchableHighlight>
            <Separator/>  
          </View>
        )
      }
    })
    return(
      (userInfo) ? <View/> :  
      <View style={styles.detailContainer}>
        {list}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    fontFamily: 'Avenir-Medium'
  },
  detailContainer: {
    flexDirection:'column', 
    flexWrap:'wrap',
    marginTop: 10
  },
  industryContainer: {
    flexDirection:'row', 
    flexWrap:'wrap',

  },
  content: {
    fontSize: 15,
    fontFamily: 'Avenir-Medium',
    padding: 5,
  }
});

module.exports = AddIndustry;