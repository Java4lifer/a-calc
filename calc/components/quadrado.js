import React from "react";
import { View, StyleSheet, Text } from "react-native";

function props() {
    const side = props.side || 50
    return (
        <View style={{
            height: side,
            width: side,
            backgroundColor: 'gray',
        }}>
            <Text>{props.text}</Text>
        </View>
    )
}

function inpu() {
    return (
        <View style={{
            height: 80,
            width: 40,
            backgroundColor: 'white',
            border: '5 solid black'
        }}>
            <Text>{props.text}</Text>
        </View>
    )
}

export default props;