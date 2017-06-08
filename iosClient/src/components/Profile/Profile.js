import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet,
	TouchableHighlight,
	AsyncStorage,
	ScrollView
 } from 'react-native';
import Badge from './Badge';
import Separator from '../Utilities/Separator';
import Tags from './Tags';
import AddTags from './AddTags';
import Summary from './Summary';
import AddSummary from './AddSummary';
import Industry from './Industry';
import AddIndustry from './AddIndustry';
import Education from './Education';
import AddEducation from './AddEducation';


class Profile extends Component{
  constructor (props) {
    super(props);
  }

  goToAddTags(){
  	this.props.navigator.push({
			component: AddTags,
			title: 'Add Tags'
		});
  }

  goToAddSummary(){
  	this.props.navigator.push({
			component: AddSummary,
			title: 'Add Summary'
		});
  }

  goToAddIndustry(){
  	this.props.navigator.push({
			component: AddIndustry,
			title: 'Add Industry'
		});
  }

  goToAddEducation(){
  	this.props.navigator.push({
			component: AddEducation,
			title: 'Add Education'
		});
  }

  render(){
  	return(
  		<ScrollView style={styles.listcontainer}>
				<Badge/>
        <View>
					<TouchableHighlight style={styles.rowContainer} onPress={ () => this.goToAddTags() }>
						<View
							style={styles.detailContainer}>
							<Tags/>
						</View>
					</TouchableHighlight>
					<Separator/>	
					<TouchableHighlight style={styles.rowContainer} onPress={ () => this.goToAddSummary() }>
						<View
							style={styles.detailContainer}>
							<Summary/>
						</View>
					</TouchableHighlight>
					<Separator/>
					<TouchableHighlight style={styles.rowContainer} onPress={ () => this.goToAddIndustry() }>
						<View
							style={styles.detailContainer}>
							<Industry/>
						</View>
					</TouchableHighlight>
					<Separator/>
					<TouchableHighlight style={styles.rowContainer} onPress={ () => this.goToAddEducation() }>
						<View
							style={styles.detailContainer}>
							<Education/>
						</View>
					</TouchableHighlight>
					<Separator/>				
				</View>
      </ScrollView>
  		);
  }
}

var styles = StyleSheet.create({
    containerProfile:{
      flexDirection: 'row',
      marginLeft: 10,
      padding:5
    },
    detailContainer: {
    	flexDirection:'row', 
    	flexWrap:'wrap'
    },
    container: {
    	paddingTop: 20,
      height:55,
    },
    image:{
      height: 40,
      borderRadius: 20,
      width: 40,
    },
    rowContainer: {
      padding: 10
    },
    rowTitle: {
      color: '#48BBEC',
      fontSize: 16
    },
    addDetailsSymbol: {
      color: '#48BBEC',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right'
    },
    rowContent: {
      fontSize: 19
    },
    name: {
      fontSize: 18,
      paddingBottom: 5,
      paddingTop:5,
      paddingLeft:20,
      fontFamily: 'Avenir-Medium'
    },
    stars: {
      color: '#48BBEC',
      fontSize: 14,
      paddingBottom: 5
    },
    description: {
      fontSize: 14,
      paddingBottom: 5
    },
    text: {
      fontSize: 24,
      marginTop: 300,
      color: 'black',
      alignSelf: 'center'
  },
  
});

module.exports = Profile;