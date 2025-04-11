import { TextInput, StyleSheet } from "react-native";

type NumberTextInputProps = {
  hint?: string;
  value: string;
  onChangeText?: (text: string) => void;
};

export default function CustomTextInput({
  hint,
  value,
  onChangeText,
  ...props
}: NumberTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={hint}
      placeholderTextColor="#888"
      onChangeText={onChangeText}
      keyboardType="numeric"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});
