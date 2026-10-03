import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Search, X } from "lucide-react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search tasks...",
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Search
        size={20}
        color="#9AA4B2"
        strokeWidth={2}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9AA4B2"
        style={styles.input}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />

      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => onChangeText("")}
          activeOpacity={0.7}
          hitSlop={8}
        >
          <X
            size={20}
            color="#9AA4B2"
            strokeWidth={2}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
    marginBottom:10,
    backgroundColor: "#111820",
    borderWidth: 1,
    borderColor: "#252D36",
    borderRadius: 12,
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#FFFFFF",
    fontSize: 15,
    paddingVertical: 0,
  },
});