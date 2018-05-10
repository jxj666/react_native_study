import React, { Component } from 'react';
import { Text,View, StyleSheet } from 'react-native';

export default class View3 extends Component {
  render() {
    return (
      <View style={styles.father}>
      <Text style={[styles.flex1,styles.h50]}>
        1
      </Text>
      <Text style={[styles.flex2,styles.h50]}>
        2
      </Text>
      <Text style={[styles.flex1,styles.h50]}>
        3
      </Text>
      <Text style={[styles.flex2,styles.h50]}>
        4
      </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  flex1: {
    backgroundColor: 'red',
    width:50,
    color:'#fff',
    textAlign: 'center',
  },
  flex2:{
    backgroundColor: 'blue',
    width:50,
    textAlign: 'center',
    color:'#fff',
  },
  h50:{
    height:50,
    lineHeight: 50,
  },
  father:{
    width:300,
    height:100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});