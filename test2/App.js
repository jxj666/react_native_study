/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import View1 from './component/View1';
import View2 from './component/View2';
import View3 from './component/View3';
import View4 from './component/View4';
// import View5 from './component/View5';
import View6 from './component/View6';




const instructions = Platform.select({
  ios: `ios`,
  android: `android`,
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    let pic={
      url:`https://jxj322991.github.io/2018imgs/img/png/01.png`,
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          hello world!
        </Text>
        <Image source={pic} style={styles.img}></Image>
        <View1 name={instructions} />
        <View2 text='react native'/>
        <View3 />
        <View4 text='abc'/>
        <View6 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  img:{
    width:100,
    height:100,
    backgroundColor:'#eee',
  }
});
