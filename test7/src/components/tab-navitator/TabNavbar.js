import React from 'react';
import { Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const Home = require('../home/Home');
const Order = require('../order/Order');
const Personal = require('../personal/Personal');

const BaseComponent = require('../../base/base-component/BaseComponent');

const CSS = StyleSheet.create({
  unSelected: {
	color: '#8a8a8a',
	fontSize: 10
  },
  selectedTab: {
	color: '#13227a',
	fontSize: 10
  },
  icon: {
	width: 25,
	height: 25
  }
});


class TabNavbar extends BaseComponent {
  static navigationOptions = {
	header: null
  };

  constructor(props) {
	super(props);
	this.state = {
	  selectedTab: 'home'
	};
  }

  renderTabNavigator() {
	const tabs = [
	  {
		unSelected: require('./trade.png'),
		selected: require('./tradeUp.png'),
		view: <Home navigation={ this.props.navigation }/>,
		title: 'home',
		titleName: '首页'
	  },
	  {
		unSelected: require('./text.png'),
		selected: require('./textUp.png'),
		view: <Order navigation={ this.props.navigation }/>,
		title: 'order',
		titleName: '订单'
	  },
	  {
		unSelected: require('./Smile.png'),
		selected: require('./SmileUp.png'),

		view: <Personal
			navigation={ this.props.navigation }
		/>,
		title: 'personal',
		titleName: '个人'
	  }
	];

	return (
		  <TabNavigator>
			{ this._renderIcon(tabs[0]) }
			{ this._renderIcon(tabs[1]) }
			{ this._renderIcon(tabs[2]) }
		  </TabNavigator>
	);
  }

  _renderIcon(tab) {
	return (
		<TabNavigator.Item
			selected={ this.state.selectedTab === tab.title }
			title={ tab.titleName }
			titleStyle={ CSS.unSelected }
			selectedTitleStyle={ CSS.selectedTab }
			renderIcon={ () => <Image style={ CSS.icon } source={ tab.unSelected }/> }
			renderSelectedIcon={ () => <Image style={ CSS.icon } source={ tab.selected }/> }
			onPress={ () => this.setState({ selectedTab: tab.title }) }>
		  { tab.view }
		</TabNavigator.Item>
	);
  }
}

module.exports = TabNavbar;