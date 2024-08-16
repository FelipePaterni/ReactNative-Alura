import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'xxxx', idade: 21, email: 'xxxx@etec.sp.gov.br' },
        { id: '2', nome: 'xxxx', idade: 15, email: 'xxxx@etec.sp.gov.br' },
        { id: '3', nome: 'xxxx', idade: 40, email: 'xxxx@etec.sp.gov.br' },
        { id: '4', nome: 'xxxx', idade: 50, email: 'xxxx@etec.sp.gov.br' },
      ]
    };
  }


  render() {
    return (
      <View style={style.container}>

        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Dados data={item} />}
        />



      </View>
    );
  }
}

class Dados extends Component {
  render() {
    return (

      <View style={style.areaDados}>
        <Text style={style.textoDados}>ID: {this.props.data.id}</Text>
        <Text style={style.textoDados}>Nome:  {this.props.data.nome} </Text>
        <Text style={style.textoDados}>Idade: {this.props.data.idade}</Text>
        <Text style={style.textoDados}>Email:  {this.props.data.email}</Text>
      </View>

    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 15,
    paddingTop:40,

  },
  areaDados: {
    backgroundColor: "#222",
    height: 200,
    marginBottom: 15
  },
  textoDados: {
    color: "#fff",
    fontSize: 20,
    padding: 10,
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