import React, {useEffect, useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Button} from 'react-native'
//import estilo from '../estilo'


    function typeNum(nums, num) {
      useEffect(() => {
        const locaust = nums + num
      })
    }

    function equalTo(nums) {
      useEffect(() => {
        if(nums === '') {console.error("No good")}
        else{
          const sion = eval(nums)
        }
      })
    }

    export {typeNum, equalTo}