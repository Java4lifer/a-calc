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
  },
  divs: {
    width: '50px',
    height: "50px",
    backgroundColor: 'gray',
    fontSize: '40px',
  },
  input: {
    width: 'auto',
    height: '25%'
  },
  calc: {
    width: '10vw',
    height: '10vw',
    border: '5px solid gray'
  }
});
