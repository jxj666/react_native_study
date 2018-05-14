import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const Swiper = require('react-native-swiper');
const Variable = require('../../common/css/variable');
const Goods = require('../../base/goods/Goods');

const CSS = StyleSheet.create({
  goodsDetailContainer: {
	flex: 1,
	backgroundColor: Variable.colorBackground
  },
  swiperWrapper: {
	width: deviceWidth,
	height: deviceWidth - 100,
	backgroundColor: '#fff'
  },
  goodsImg: {
	width: deviceWidth,
	height: deviceWidth - 100
  },
  dotCommon: {
	width: 5,
	height: 5,
	borderRadius: 5,
	marginLeft: 3,
	marginRight: 3,
	marginTop: 3,
	marginBottom: 3
  },
  dot: {
	backgroundColor: 'rgba(0,0,0,.2)',
  },
  activeDot: {
	backgroundColor: '#f8ee1c',
  },
  goodsContent: {
	padding: 10,
	backgroundColor: '#fff'
  },
  brand: {
	fontSize: 13,
	fontWeight: '700'
  },
  name: {
	fontSize: 12,
	fontWeight: 'normal'
  },
  unit: {
	fontSize: 10,
	color: Variable.colorUnit
  },
  price: {
	fontSize: 14,
	color: Variable.colorPrice
  },
  recommendTitle: {
	marginTop: 10,
	padding: 5,
	borderBottomWidth: .5,
	borderColor: '#ddd',
	fontSize: 12,
	backgroundColor: '#fff'
  },
  recommendContainer: {
	flexDirection: 'row',
	alignItems: 'center',
	backgroundColor: '#fff'
  },
  infoText:{
  	fontSize:18,
  	lineHeight: 27,
  	color:'#999',
  	padding:27,
  	backgroundColor:'#fff',
  	marginTop:10,

  }
});

// Swiper
class SwiperAds extends React.Component {
  render() {
	return (
		<View style={ CSS.swiperWrapper }>
		  <Swiper dot={ this._dot() } activeDot={ this._activeDot() }>
			<Image style={ CSS.goodsImg } resizeMode={ 'contain' } source={ require('./goods.jpg') }/>
			<Image style={ CSS.goodsImg } resizeMode={ 'contain' } source={ require('./goods.jpg') }/>
		  </Swiper>
		</View>
	);
  }

  _dot = () => {
	return (
		<View style={ [CSS.dot, CSS.dotCommon] }/>
	);
  };

  _activeDot = () => {
	return (
		<View style={ [CSS.activeDot, CSS.dotCommon] }/>
	);
  }
}

class GoodsDetail extends React.Component {
  static navigationOptions = {
	title: '商品详情'
  };

  render() {
	return (
		<FlatList
			style={ CSS.goodsDetailContainer }
			ListHeaderComponent={ this.listHeaderComponent }
			ListFooterComponent={ this.listFooterCompnent }
			showsVerticalScrollIndicator={ false }/>
	);
  }

  listHeaderComponent = () => {
	return (
		<View>
		  <SwiperAds/>
		  <View style={ CSS.goodsContent }>
			<Text style={ CSS.brand }>
			  类别
			  <Text style={ CSS.name }>商品</Text>
			</Text>
			<Text style={ CSS.unit }>
			  1/个
			</Text>
			<Text style={ CSS.price }>
			  ￥30.00
			</Text>
		  </View>
		</View>
	);
  };

  listFooterCompnent = () => {
	return (
		<View>
		<Text style={CSS.infoText}>
			商品是人类社会生产力发展到一定历史阶段的产物，是用于交换的劳动产品。恩格斯对此进行了科学的总结：商品“首先是私人产品。但是，只有这些私人产品不是为自己消费，而是为他人的消费，即为社会的消费而生产时，它们才成为商品；它们通过交换进入社会的消费”。	  
		</Text>		
		</View>
	);
  }
}

module.exports = GoodsDetail;