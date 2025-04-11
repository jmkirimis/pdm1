import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity, StyleSheet } from "react-native";

type CustomButtonProps = {
    onPress: () => void;
}

export default function CustomButton({onPress}: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <ThemedText style={styles.txt}>Calcular</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
})