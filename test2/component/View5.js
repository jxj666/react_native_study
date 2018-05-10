import React, { Component } from 'react';
import{ ScrollView, Image, Text, View,StyleSheet } from 'react-native'

export default class View5 extends Component {

  render() {
      let pic={
        url1:{
      url:`https://jxj322991.github.io/2018imgs/img/png/02.png`,
        },
        url2:{
      url:`https://jxj322991.github.io/2018imgs/img/png/03.png`,
        },
        url3:{
      url:`https://jxj322991.github.io/2018imgs/img/png/04.png`,
        },
      };
      return(
        <ScrollView contentContainerStyle={styles.main}>
          <Text style={styles.text1}>1</Text>
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Text style={styles.text1}>2</Text>
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Text style={styles.text1}>3</Text>
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Text style={styles.text1}>4</Text>
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Text style={styles.text1}>5</Text>
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
          <Image source={Math.random()>0.5?pic.url1:pic.url2} style={styles.img} />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height:50,
    width:50,
    margin:10,
  },
  text1:{
    fontSize:16,
    height:50,
    width:50,
    backgroundColor: '#eee',
    lineHeight: 50,
    margin:10,
    textAlign: 'center',
    color:'red',
  },
  main:{
    marginTop: 30,
    width:"100%",
    // height:100,
    overflow: 'scroll',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent:'flex-start',
  }
});