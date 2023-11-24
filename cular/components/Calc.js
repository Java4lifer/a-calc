import React, {useState} from 'react'
import styles from '../src/App.js'
import {SafeAreaView, Text, TextInput, FlatList, TouchableWithoutFeedback} from 'react-native'
import Quadrado from './quadrado.js'
import keys from './keys.js'
//import estilo from '../estilo'

export default Calc =>{
    const [nums, setNums] = useState('')
    const numbox = ({item: n}) => {
        return (
        <TouchableWithoutFeedback onPress={typeNum(n.txt)}>
        <Quadrado text={n.txt}/>
        </TouchableWithoutFeedback>
        )
    }

    const typeNum = (num) => {
        setNums += num
    }

    const equalTo = () => {
        print(nums)
        const equa = nums.replace('x', '*')
        const sion = parseFloat(equa)
        print(sion)
    }

return(
    <SafeAreaView>
        <TextInput 
        placeholder=""
        value={nums}
        editable={false}
        />
        <FlatList
            data={keys}
            keyExtractor={n=>`${n.id}`}
            renderItem={numbox}/>
        <TouchableWithoutFeedback onPress={equalTo}>
            <Quadrado text="="/>
        </TouchableWithoutFeedback>
    </SafeAreaView>
)
}