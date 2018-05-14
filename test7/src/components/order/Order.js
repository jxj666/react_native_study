import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import Header from '../header/header';

const deviceWidth = Dimensions.get('window').width;
const OrderGoods = require('../../base/order-goods/OrderGoods');
const MBtn = require('../../base/btns/m-btn');

const CSS = StyleSheet.create({
  orderListContainer: {
	flex: 1
  },
  orderGoodsWrapper: {
	marginBottom: 5,
	padding: 5,
	backgroundColor: '#fff'
  },
  orderHeader: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	height: 25,
	borderBottomWidth: .5,
	borderColor: '#ddd'
  },
  store: {
	alignSelf: 'center',
	fontSize: 13,
	fontWeight: '400'
  },
  orderStatus: {
	alignSelf: 'center',
	fontSize: 13,
	color: '#ff8017'
  },
  orderDetail: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	height: 25,
	borderTopWidth: .5,
	borderColor: '#ddd'
  },
  createDate: {
	alignSelf: 'center',
	color: '#ff8017',
	fontSize: 12
  },
  totalWrapper: {
	alignSelf: 'center',
  },
  totalQuantity: {
	color: '#333',
	fontSize: 12
  },
  totalPrice: {
	color: '#333',
	fontSize: 12
  },
  totalColor: {
	color: '#fb5627'
  },
  btnsGroup: {
	flexDirection: 'row',
	alignSelf: 'flex-end',
	paddingTop: 5,
	height: 30
  }
});

let navigation;
class Order extends React.Component {
  constructor(props) {
	super(props);
	navigation = props.navigation;
  }

  render() {
	return (
		<View style={ CSS.orderListContainer }>
		<Header />
		<OrderList />
		  {/*<OrderTopTabNavigator/>*/}
		</View>
	);
  }
}

class OrderList extends React.Component {
  constructor(props) {
	super(props);
  }

  render() {
	const goodsList = [
	  { title: 'Title Text', key: 'item1' },
	  { title: 'Title Text', key: 'item2' },
	  { title: 'Title Text', key: 'item3' },
	  { title: 'Title Text', key: 'item4' },
	  { title: 'Title Text', key: 'item5' },
	  { title: 'Title Text', key: 'item6' },
	  { title: 'Title Text', key: 'item7' },
	  { title: 'Title Text', key: 'item8' },
	  { title: 'Title Text', key: 'item9' },
	];

	return (
		
		<FlatList
			showsVerticalScrollIndicator={ false }
			data={ goodsList }
			renderItem={ this.renderOrderGoods }
		/>

	);
  }

  renderOrderGoods = () => {
	return (
		<View style={ CSS.orderGoodsWrapper }>
		  <TouchableOpacity onPress={ () => {
			navigation.navigate('PayResult')
		  } }>
			<View style={ CSS.orderHeader }>
			  <Text style={ CSS.store }>商品</Text>
			  <Text style={ CSS.orderStatus }>等待付款</Text>
			</View>
			<OrderGoods/>
			<View style={ CSS.orderDetail }>
			  <Text style={ CSS.createDate }>2017-09-10 12:12:12</Text>
			  <Text style={ CSS.totalWrapper }>
				<Text style={ CSS.totalPrice }>应付 <Text style={ CSS.totalColor }>￥80.00</Text></Text>
			  </Text>
			</View>
		  </TouchableOpacity>
		</View>
	);
  }
}

module.exports = Order;