import React, { Component } from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';

export default class View4 extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {text:''};
	}
	render() {
		return (
			<View style={styles.father}>
			<TextInput style={styles.input} placeholder='请输入相关状态!' onChangeText={text => this.setState({text})} />
			<Text style={styles.text}>
			  {this.state.text.split(" ").map(word => word && '*').join(' ')}
			</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  father: {
  	padding:10,
  	width:300,
  	height:'auto',
  	backgroundColor: 'yellow',
  },
  input: {
  	height:40,
  },
  text: {
  	padding:10,
  	fontSize: 20,
  }
});
