import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Button} from 'react-native'
//import estilo from '../estilo'

export default Calc =>{
    const [nums, setNums] = useState('2')

    const typeNum = (num) => setNums(nums + num)

    const equalTo = () => {
      if(nums === '') {console.error("No good")}
      const sion = eval(nums)
      setNums(sion)
    }

return(
    <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.input} 
        placeholder=""
        value={nums}
        onChange={nums => setNums(nums)}
        />
        <Button style={styles.divs} onPress={typeNum('1')}>1</Button>
        <Button style={styles.divs} onPress={typeNum('2')}>2</Button>
        <Button style={styles.divs} onPress={typeNum('3')}>3</Button>
        <Button style={styles.divs} onPress={typeNum('4')}>4</Button>
        <Button style={styles.divs} onPress={typeNum('5')}>5</Button>
        <Button style={styles.divs} onPress={typeNum('6')}>6</Button>
        <Button style={styles.divs} onPress={typeNum('7')}>7</Button>
        <Button style={styles.divs} onPress={typeNum('8')}>8</Button>
        <Button style={styles.divs} onPress={typeNum('9')}>9</Button>
        <Button style={styles.divs} onPress={typeNum('0')}>0</Button>
        <Button style={styles.divs} onPress={typeNum(' + ')}>+</Button>
        <Button style={styles.divs} onPress={typeNum(' - ')}>-</Button>
        <Button style={styles.divs} onPress={typeNum(' * ')}>x</Button>
        <Button style={styles.divs} onPress={typeNum(' / ')}>/</Button>
        <Button style={styles.divs} onPress={typeNum('.')}>.</Button>
        <Button style={styles.equ} onPress={equalTo()}>=</Button>
        
    </SafeAreaView>
)
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
    equ: {
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
      width: 100,
      height: 100,
      border: '5 solid gray'
    }
  });