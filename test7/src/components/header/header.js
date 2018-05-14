import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Variable = require('../../common/css/variable');


const CSS= StyleSheet.create({
  header: {
	flexDirection: 'row',
	paddingTop: 24,
	paddingBottom: 4,
	paddingLeft: 10,
	paddingRight: 10,
	backgroundColor: Variable.colorTheme
  },
  headerTextContainer: {
	flex: 1,
	flexDirection: 'row',
	alignSelf: 'center',
	justifyContent: 'space-between',
  },
  headerText: {
  	marginTop:1,
	fontSize: 12,
	color:'#13227a',
  },
  headerText2: {
	fontSize: 12,
	color:'#999',
  },
  arrowImg: {
	width: 10,
	height: 10,
	alignSelf: 'center'
  },
  headerImg: {
	marginTop: 0,
	marginBottom: 0,
	marginRight: 10,
	marginLeft: 10,
	width: 100,
	height: 22
  },
});
// Header
export default class Header extends React.Component {
  render() {
	return (
		<View style={ CSS.header }>
		  <View style={ CSS.headerTextContainer }>
			<Text style={ CSS.headerText }>
			  商品分期(技术验证demo)
			</Text>
			<Image style={ CSS.headerImg } source={require('./logo.png')}/>
		  </View>
		</View>
	);
  }
}