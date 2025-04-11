import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ContainerOperation from "../ContainerOperation";
import { useState } from "react";

type ContainerOperationsProps = {
  setOperador: (operacao: string) => void;
};

export default function ContainerOperations({ setOperador }: ContainerOperationsProps) {
  const [selecionado, setSelecionado] = useState("");
  const operadores = ['+', '-', '*', '/'];

  return (
    <ThemedView style={styles.container}>
      {operadores.map((op) => (
        <ContainerOperation
          key={op}
          operador={op}
          selecionado={op === selecionado}
          onPressOperador={() => {
            setSelecionado(op);
            setOperador(op);
          }}
        />
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
