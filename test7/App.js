import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import { configHttp } from './src/api/config';

configHttp(); // 初始化axios

const TabNavbar = require('./src/components/tab-navitator/TabNavbar');
const GoodsDetail = require('./src/components/goods-detail/GoodsDetail');
const PayResult = require('./src/components/pay-result/PayResult');
const Order = require('./src/components/order/Order');

const App = StackNavigator(
	{
	  TabNavbar: {
		screen: TabNavbar
	  },
	  GoodsDetail: {
		screen: GoodsDetail
	  },
	  PayResult: {
		screen: PayResult
	  },
	},
	{
	  // initialRouteName: 'TabNavbar',
	  initialRouteName: 'TabNavbar',
	  headerMode: 'screen',
	  navigationOptions: ({ navigation }) => ({
		gesturesEnabled: false,
		headerTintColor: 'black',
		headerStyle: {
		  backgroundColor: '#fdfdfd',
		},
		headerTitleStyle: {
		  fontSize: 17,
		  fontWeight: 'normal'
		},
		headerLeft: (
			<TouchableOpacity
				style={ { padding: 10 } }
				onPress={ () => {
				  navigation.goBack()
				} }
			>
			  <Image source={ require('./src/common/image/back_icon.png') }
					 resizeMode={ 'contain' }
					 style={ { width: 25, height: 25, } }/>
			</TouchableOpacity>)
	  }),
	  transitionConfig: () => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal,
	  })
	});

module.exports = App;