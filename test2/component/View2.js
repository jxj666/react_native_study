import React, { Component } from 'react';
import { Text } from 'react-native';

export default class View1 extends Component {
  constructor(props){
    super(props);
    this.state={showText:true};
    setInterval(() => {
      this.setState(previousState => {
        return {showText:!previousState.showText};
      });
    },1000);
  }
  render() {
  	let display=this.state.showText?this.props.text:' ';
    return (
      <Text>{display}</Text>
      )
  }
}
