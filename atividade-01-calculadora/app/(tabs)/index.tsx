import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import NumberTextInput from '@/components/ui/Text/NumberTextInput';
import ContainerNumber from '@/components/ui/ContainerNumber';
import ContainerOperations from '@/components/ui/Operations/ContainerOperations';
import CustomButton from '@/components/ui/CustomButton';

export default function HomeScreen() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularResultado() {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2) || operacao === "") {
      setResultado("Inválido");
      return;
    }

    let res = 0;

    switch (operacao) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResultado("Não é possível dividir por zero");
          return;
        }
        res = num1 / num2;
        break;
    }

    setResultado(res.toString());
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedView style={styles.container}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Atividade - Calculadora</ThemedText>
      </ThemedView>
      <ContainerNumber 
        label="Valor 1"
        valor={valor1}
        placeholderText='Digite o primeiro valor'
        setValor={setValor1}
      />
      <ContainerNumber 
        label="Valor 2"
        valor={valor2}
        placeholderText='Digite o segundo valor'
        setValor={setValor2}
      />
      <ContainerOperations setOperador={setOperacao} />
        <NumberTextInput
          hint="Resultado"
          value={resultado}
          onChangeText={setResultado}
        />
      <CustomButton onPress={calcularResultado} />
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    gap: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  containerNumber: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
