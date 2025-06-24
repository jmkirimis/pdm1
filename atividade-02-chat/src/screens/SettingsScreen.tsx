import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigationTypes"
import { useState } from "react"
import { Text, View } from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>

export default function SettingsScreen({navigation}:Props) {
    const [name, setName] = useState("")
    return (
        <View>
            <Text>Tela de configurações</Text>
        </View>
    )
}