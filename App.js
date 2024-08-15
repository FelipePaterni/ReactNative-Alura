import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={style.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.box1}></View>
          <View style={style.box2}></View>
          <View style={style.box3}></View>
          <View style={style.box4}></View>
        </ScrollView>

    
        <ScrollView Vert={true}>
          <View style={style.box1H}></View>
          <View style={style.box2H}></View>
          <View style={style.box3H}></View>
          <View style={style.box4H}></View>
        </ScrollView>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    with: 150,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
    with: 150,
  },
  box3: {
    backgroundColor: 'blue',
    height: 250,
    with: 150,
  },
  box4: {
    backgroundColor: 'yellow',
    height: 250,
    with: 150,
  },

})

export default App;