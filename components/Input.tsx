import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEvent,
  TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  style?: object;
  value: string;
  onChangeText: (text: string) => void;
}

export default function Input({
  label,
  error,
  style,
  value,
  onChangeText,
  ...props
}: InputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        {...props}
        value={value}
        onChange={(e:TextInputChangeEvent) => onChangeText(e.nativeEvent.text)}
        style={[styles.input, error && styles.errorInput, style]}
        placeholderTextColor="#8D99AE"
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    minHeight: 50,
    backgroundColor: "#111820",
    borderWidth: 1,
    borderColor: "#2B2D42",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#FFFFFF",
    fontSize: 16,
  },

  errorInput: {
    borderColor: "#EF233C",
  },

  errorText: {
    color: "#EF233C",
    fontSize: 12,
    marginTop: 5,
  },
});