import { View } from "react-native";


export default function input() {
    return(
        <View style={styles.input}/>
    )
}

const styles = StyleSheet.create({
    input:{
        width: 200,
        height: 500,
        border: '30 solid black',
        backgroundColor: 'grey'
    }
})