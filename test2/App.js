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
    width:300,
    height:300,
    backgroundColor:'#eee',
  }
});
