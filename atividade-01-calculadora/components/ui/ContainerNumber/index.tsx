import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import NumberTextInput from "../Text/NumberTextInput";

type ContainerNumberProps = {
  label: string;
  valor: string;
  placeholderText?: string;
  setValor: (valor: string) => void;
};

export default function ContainerNumber({
  label,
  valor,
  placeholderText,
  setValor,
  ...props
}: ContainerNumberProps) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.txt}>{label}</ThemedText>
      <NumberTextInput
        hint={placeholderText}
        value={valor}
        onChangeText={setValor}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
  txt: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
