import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default props => {
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