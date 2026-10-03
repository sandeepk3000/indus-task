import React from "react";
import { Pressable, StyleSheet, Text, View,ViewStyle } from "react-native";
import { TaskFilter } from "../types";


interface FilterBarProps {
  style:ViewStyle;
  value: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}

const filters: {
  label: string;
  value: TaskFilter;
}[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

export default function TaskFilterBar({
  style,
  value,
  onChange,
}: FilterBarProps) {
  return (
    <View style={[
      style,
      styles.container
    ]}>
      {filters.map((filter) => {
        const isSelected = value === filter.value;

        return (
          <Pressable
            key={filter.value}
            onPress={() => onChange(filter.value)}
            style={[
              styles.item,
              isSelected && styles.selectedItem,
            ]}
          >
            <Text
              style={[
                styles.text,
                isSelected && styles.selectedText,
              ]}
            >
              {filter.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#0B1016",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },

  item: {
    flex: 1,
    minHeight: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },

  selectedItem: {
    backgroundColor: "#FF0A2B",
  },

  text: {
    color: "#8D99AE",
    fontSize: 14,
    fontWeight: "600",
  },

  selectedText: {
    color: "#FFFFFF",
  },
});