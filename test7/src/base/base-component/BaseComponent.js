import React from 'react';
import { View } from 'react-native';

const Spinner = require('../spinner/Spinner');

class BaseComponent extends React.Component {
  render() {
	return (
		<View style={ { flex: 1 } }>
		  { this.renderTabNavigator() }
		  <Spinner ref="Spinner"/>
		</View>
	);
  }

  // 子类调用该类的方法
  renderTabNavigator() {
  }


  _SpinnerShow = () => {
	this.refs.Spinner.show();
  };

  _SpinnerHide = () => {
	this.refs.Spinner.hide();
  };
}


module.exports = BaseComponent;