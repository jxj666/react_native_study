import React, { Component } from 'react';
import { Text } from 'react-native';

export default class View1 extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
      )
  }
}
