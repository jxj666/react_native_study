import React from 'react';
import { View } from 'react-native';

import SpinnerNative from 'react-native-loading-spinner-overlay';

class Spinner extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  visible: false
	}
  }

  render() {
	return (
		<View>
		  <SpinnerNative
			  visible={ this.state.visible }
			  overlayColor={ 'rgba(0, 0, 0, 0.25)' }
		  />
		</View>
	);
  }

  show = () => {
	this.setState({
	  visible: true
	});
  };

  hide = () => {
	this.setState({
	  visible: false
	});
  }
}

module.exports = Spinner;