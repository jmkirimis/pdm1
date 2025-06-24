import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigationTypes"
import { useState } from "react"
import { Text, View } from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>

export default function RegisterScreen({navigation}:Props) {
    const [name, setName] = useState("")
    return (
        <View>
            <Text>Tela de cadastro</Text>
        </View>
    )
}