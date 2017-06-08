import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Separator from '../Utilities/Separator';

class AddIndustry extends Component{
  constructor (props) {
    super(props);
    this.state = {
      industry: 'Technology'
    }
  }

  render(){
    var userInfo = this.props.data;
    var industryValues = ['Technology', 'BioMedical', 'Education', 'Finance/Banking', 'Retail/Ecommerce', 'Leisure/Travel', 'Gaming', 'Hardware', 'Enterprise Software/SAAS', 'Social', 'Service', 'Other'];
    var list = industryValues.map(function(industry, index){
      if(industryValues.length === 0){
        return <View key={index}/>
      } else {
        return (
          <View key={index} style={styles.content} >
            <TouchableHighlight><Text style={styles.content}>{industry}</Text></TouchableHighlight>
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
    content: {
      fontSize: 15,
      fontFamily: 'Avenir-Medium',
      padding: 5,
    }
});

module.exports = AddIndustry;