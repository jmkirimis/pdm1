import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigationTypes"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({navigation}:Props) {
    const [name, setName] = useState("")
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.containerMessage}>
                <TextInput placeholder="AAA" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerMessage: {
        backgroundColor: "#c9c9c9",
        width: "100%",
        padding: 10,
    }
})