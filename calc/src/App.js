import React from 'react';
import Calc from '../components/Calc.js';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Calc/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  divs: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    fontSize: 5,
  },
  input: {
    width: 40,
    height: 22
  },
  calc: {
    width: 10,
    height: 10,
    border: '5px solid gray'
  }
});
