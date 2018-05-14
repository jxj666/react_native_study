import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Variable = require('../../common/css/variable');

const CSS = StyleSheet.create({
  btn: {
	marginLeft: 5,
	marginRight: 5,
	width: 70,
	height: 20,
	borderWidth: .5,
	borderColor: '#bfbfbf',
	textAlign: 'center',
	textAlignVertical: 'center',
	borderRadius: 5,
	fontSize: 12,
  },
  hollow: {
	backgroundColor: '#f8f8f8',
  },
  solid: {
	backgroundColor: Variable.colorTheme,
  }
});

class MBtn extends React.Component {
  constructor(props) {
	super(props);
  }

  render() {
	return (
		<Text style={ [this.props.type === 'hollow' ? CSS.hollow : CSS.solid, CSS.btn] }>{ this.props.text }</Text>
	)
  };

  onPressLearnMore() {

  };

}

module.exports = MBtn;