import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type ContainerOperationProps = {
  operador: string;
  onPressOperador: (operador: string) => void;
  selecionado: boolean;
};

export default function ContainerOperation({
  operador,
  onPressOperador,
  selecionado,
}: ContainerOperationProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selecionado && { backgroundColor: "#017cff" },
      ]}
      onPress={() => onPressOperador(operador)}
    >
      <ThemedText
        style={[
          styles.operation,
          operador === "*" && { paddingTop: 8 },
          selecionado && { color: "#fff" },
        ]}
      >
        {operador}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    paddingTop: 10,
    paddingBottom: 6,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  operation: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#545454",
  },
});
