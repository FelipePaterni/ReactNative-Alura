import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
      lists: [
        { key: 1, nome: "        ", valor: 0 },
        { key: 2, nome: "Roupa de cama", valor: 59 },
        { key: 3, nome: "Roupa de banho", valor: 37 },
        { key: 4, nome: "Eletro/Eletronico", valor: 25.70 },
        { key: 5, nome: "Geral", valor: 70 },
      ]
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>------------Menu------------</Text>
        <Picker selectedValue={this.state.menu}
          onValueChange={(itemValue, itemIndex) => this.setState({ menu: itemValue })}>
          <Picker.Item key={1} value={1} label={"     "} />
          <Picker.Item key={2} value={2} label={"Roupa de Cama"} />
          <Picker.Item key={3} value={3} label={"Roupa de Banho"} />
          <Picker.Item key={4} value={4} label={"Setor de Eletrônicos"} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  menu: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  },
  caixa: {
    padding: 10,
    margin: 10
  }
});
