import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Button} from 'react-native'

export default Calc =>{
    const [nums, setNums] = useState('')


return(
    <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.input}
        value={nums}
        onChangeText={nums => setNums(nums)}/>
        <Button style={styles.divs} title='1' onPress={() => setNums(nums + '1')}/>
        <Button style={styles.divs} title='2' onPress={() => setNums(nums + '2')}/>
        <Button style={styles.divs} title='3' onPress={() => setNums(nums + '3')}/>
        <Button style={styles.divs} title='4' onPress={() => setNums(nums + '4')}/>
        <Button style={styles.divs} title='5' onPress={() => setNums(nums + '5')}/>
        <Button style={styles.divs} title='6' onPress={() => setNums(nums + '6')}/>
        <Button style={styles.divs} title='7' onPress={() => setNums(nums + '7')}/>
        <Button style={styles.divs} title='8' onPress={() => setNums(nums + '8')}/>
        <Button style={styles.divs} title='9' onPress={() => setNums(nums + '9')}/>
        <Button style={styles.divs} title='0' onPress={() => setNums(nums + '0')}/>
        <Button style={styles.divs} title='+' onPress={() => setNums(nums + ' + ')}/>
        <Button style={styles.divs} title='-' onPress={() => setNums(nums + ' - ')}/>
        <Button style={styles.divs} title='x' onPress={() => setNums(nums + ' * ')}/>
        <Button style={styles.divs} title='/' onPress={() => setNums(nums + ' / ')}/>
        <Button style={styles.divs} title='.' onPress={() => setNums(nums + '.')}/>
        <Button style={styles.equ} title='C' onPress={() => setNums('')}/>
        <Button style={styles.equ} title='=' onPress={() => setNums(`${eval(nums)}`)}/>
        
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: 40
    },
    divs: {
      width: 50,
      height: 50,
      backgroundColor: 'gray',
      fontSize: 5,
    },
    equ: {
      width: 50,
      height: 50,
      backgroundColor: 'gray',
      fontSize: 5,
    },
    input: {
      width: 90,
      height: 22,
      backgroundColor: 'black',
      color: 'white'
    },
    calc: {
      width: 100,
      height: 100,
      border: '5 solid gray'
    }
  });