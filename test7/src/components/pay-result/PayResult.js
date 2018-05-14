import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';

const Variable = require('../../common/css/variable');

const CSS = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: Variable.colorBackground
  },
  resultText: {
	marginTop: 10,
	marginBottom: 10,
	textAlign: 'center',
	color: '#f2350e'
  },
  resultInfo: {
	margin: 10,
	padding: 10,
	borderRadius: 5,
	backgroundColor: '#fff'
  },
  resultInfoItem: {
	height: 30,
	alignItems: 'center',
	flexDirection: 'row'
  },
  itemText: {
	width: 80,
	color: '#878787'
  },
  iphoneWrapper: {
	margin: 10,
	padding: 5,
	borderRadius: 5,
	flexDirection: 'row',
	alignItems: 'center',
	backgroundColor: '#fff'
  },
  iphoneImg: {
	width: 30,
	height: 30
  }
});

class PayResult extends React.Component {
  static navigationOptions = {
	title: '订单详情'
  };

  render() {
	return (
		<View style={ CSS.container }>
		  <View style={ CSS.resultInfo }>
			<View style={ CSS.resultInfoItem }>
			  <Text style={ CSS.itemText }>支付金额:</Text>
			  <Text style={ { color: '#f2350e' } }>￥30.00</Text>
			</View>
			<View style={ CSS.resultInfoItem }>
			  <Text style={ CSS.itemText }>支付方式:</Text>
			  <Text style={ { color: '#333' } }>网上支付</Text>
			</View>
			<View style={ CSS.resultInfoItem }>
			  <Text style={ CSS.itemText }>商家配送:</Text>
			  <Text style={ { color: '#333' } }>人人有信配送</Text>
			</View>
		  </View>
		  <View style={ CSS.iphoneWrapper }>
			<Image style={ CSS.iphoneImg } source={ require('./icon_green_call.png') }/>
			<Text style={ { marginLeft: 10 } }>服务电话</Text>
			<Text style={ { color: '#74c0df', marginLeft: 5 } }>17091263003</Text>
		  </View>
		</View>
	);
  }
}

module.exports = PayResult;