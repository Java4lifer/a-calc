import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Button} from 'react-native'
import { typeNum, equalTo } from './Funs'
//import estilo from '../estilo'

export default Calc =>{
    const [nums, setNums] = useState(' ')
    
    const handleFunction = (num) => {
      useEffect(() => {
        const locaust = nums + num
        setNums(locaust)
      })
    }


return(
    <SafeAreaView style={styles.container}>
        
        <Button style={styles.divs} title='1' onPress={typeNum('1')}/>
        <Button style={styles.divs} title='2' onPress={typeNum('2')}/>
        <Button style={styles.divs} title='3' onPress={typeNum('3')}/>
        <Button style={styles.divs} title='4' onPress={typeNum('4')}/>
        <Button style={styles.divs} title='5' onPress={typeNum('5')}/>
        <Button style={styles.divs} title='6' onPress={typeNum('6')}/>
        <Button style={styles.divs} title='7' onPress={typeNum('7')}/>
        <Button style={styles.divs} title='8' onPress={typeNum('8')}/>
        <Button style={styles.divs} title='9' onPress={typeNum('9')}/>
        <Button style={styles.divs} title='0' onPress={typeNum('0')}/>
        <Button style={styles.divs} title='+' onPress={typeNum(' + ')}/>
        <Button style={styles.divs} title='-' onPress={typeNum(' - ')}/>
        <Button style={styles.divs} title='x' onPress={typeNum(' * ')}/>
        <Button style={styles.divs} title='/' onPress={typeNum(' / ')}/>
        <Button style={styles.divs} title='.' onPress={typeNum('.')}/>
        <Button style={styles.equ} title='C' onPress={() => setNums('')}/>
        <Button style={styles.equ} title='=' onPress={equalTo()}/>
        
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