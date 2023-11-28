import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, FlatList, TouchableWithoutFeedback} from 'react-native'
import Quadrado from './quadrado.js'
import keys from './keys.js'
//import estilo from '../estilo'

export default Calc =>{
    const [nums, setNums] = useState('')
    const numbox = ({item: n}) => {
        return (
        <TouchableWithoutFeedback onPress={typeNum(n.txt)}>
        <Quadrado text={n.txt} style={styles.divs}/>
        </TouchableWithoutFeedback>
        )
    }

    const typeNum = (num) => {
        setNums(nums + num)
    }

    // const equalTo = () => {
    //     const equas = nums
    //     const equa = equas.replace('x', '*')
    //     const sion = eval(equa)
    //     setNums(sion)
    // }

return(
    <SafeAreaView style={styles.container}>
        <TextInput 
        placeholder=""
        value={nums}
        />
        <FlatList style={styles.calc}
            data={keys}
            keyExtractor={n=>`${n.id}`}
            renderItem={numbox}
            />
        {/* <TouchableWithoutFeedback onPress={equalTo}>
        </TouchableWithoutFeedback> */}
        <Quadrado text="=" style={styles.divs}/>
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