import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Variable = require('../../common/css/variable');

const CSS = StyleSheet.create({
  goodsWrapper: {
	flexDirection: 'row',
	borderBottomWidth: .5,
	borderColor: '#ddd',
	backgroundColor: '#ffff'
  },
  img: {
	width: 70,
	height: 70
  },
  textContainer: {
	flex: 1,
	alignSelf: 'center'
  },
  brandName: {
	flexDirection: 'row',
	alignItems: 'center',
  },
  brand: {
	fontSize: 13,
	fontWeight: 'bold'
  },
  name: {
	fontSize: 12
  },
  unit: {
    marginTop: 5,
	marginBottom: 5,
	fontSize: 10,
	color: Variable.colorUnit
  },
  price: {
	fontSize: 12,
	color: Variable.colorPrice
  },
  quantity: {
    color: '#333'
  }
});

class OrderGoods extends React.Component {
  render() {
	return (
		<View style={ CSS.goodsWrapper }>
		  <Image style={ CSS.img } source={ require('./goods.jpg') }/>
		  <View style={ CSS.textContainer }>
			<View style={ CSS.brandName }>
			  <Text style={ CSS.brand }>分类</Text>
			  <Text style={ CSS.name }>商品</Text>
			</View>
			<Text style={ CSS.unit }>1/个</Text>
			<Text style={ CSS.price }>￥30.00</Text>
		  </View>
		</View>
	);
  }
}

module.exports = OrderGoods;