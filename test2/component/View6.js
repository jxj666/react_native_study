import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class View6 extends Component {
  _extraUniqueKey(item ,index){return "index"+index+item;}
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'A', data: ['Aevin']},
            {title: 'B', data: ['Backson', 'Bames', 'Billian', 'Bimmy', 'Boel', 'Bohn', 'Bulie']},
            {title: 'C', data: ['Cevin']},
            {title: 'D', data: ['Dackson', 'Dames', 'Dillian', 'Dimmy', 'Doel', 'Dohn', 'Dulie']},
            {title: 'E', data: ['Eevin']},
            {title: 'F', data: ['Fackson', 'Fames', 'Fillian', 'Fimmy', 'Foel', 'Fohn', 'Fulie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor = {this._extraUniqueKey}          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})