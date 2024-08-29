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
      lista: [
        { key: 1, nome: '     :P      ', valor: 0 },
        { key: 1, nome: 'Roupa de Cama', valor: 59 },
        { key: 1, nome: 'Roupa de Banho', valor: 37 },
        { key: 1, nome: 'Eletro/Eletrônico', valor: 25.70 },
        { key: 1, nome: 'Geral', valor: 70},
      ]
    };
  };

  render() {
    let listaItem = this.state.lista.map((v, k) => {
      return <Picker.Item key = {k} value = {k} label = {v.nome}/>
    })
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>------------Menu------------</Text>
        <Picker selecdValue={this.state.menu}
        on onValueChange={(itemValue, itemIndex) => this.setState({menu:itemValue})}> 
          <Picker.Item key={4} value={4} label={'             '} />
          <Picker.Item key={1} value={1} label={'Roupa de Cama'} />
          <Picker.Item key={2} value={2} label={'Roupa de Banho'} />
          <Picker.Item key={3} value={3} label={'Setor de Eletrônicos'} />
        </Picker>

<Text style={styles.menu}>Você escolheu: {this.state.lista[this.state.menu].nome}</Text>
<Text style={styles.menu}>R${this.state.lista[this.state.menu].valor.toFixed(2)}</Text>
{/*<Text style={{fontSize: 30}}>{this.state.menu}</Text>*/}

 
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
