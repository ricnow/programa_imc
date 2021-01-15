/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {altura: 0, massa: 0, resultado: 0, resultadoText: ''};
    this.calcular = this.calcular.bind(this);
  }
  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;
    if (s.resultado < 16) {
      s.resultadoText = 'Magreza Grave';
    } else if (s.resultado < 17) {
      s.resultadoText = 'Magreza Moderada';
    } else if (s.resultado < 18.5) {
      s.resultadoText = 'Magreza Leve';
    } else if (s.resultado < 25) {
      s.resultadoText = 'Saudável';
    } else if (s.resultado < 30) {
      s.resultadoText = 'Sobrepeso';
    } else if (s.resultado < 35) {
      s.resultadoText = 'Obesidade Grau I';
    } else if (s.resultado < 40) {
      s.resultadoText = 'Obesidade Grau II';
    } else {
      s.resultadoText = 'Obesidade Grau III (Mórbido)';
    }
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => {
              this.setState({massa});
            }}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {
              this.setState({altura});
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.texto}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 30}]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entrada: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  texto: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15,
  },
});
