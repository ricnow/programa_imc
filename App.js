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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput
            placeholder="Massa"
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.texto}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>30</Text>
        <Text style={[styles.resultado, {fontSize: 30}]}>Obesidade 1</Text>
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
