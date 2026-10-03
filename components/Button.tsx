import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";

interface ButtonProps extends PressableProps {
    children:React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  loading = false,
  variant = "primary",
  disabled,
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      style={style}
  
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  primary: {
    backgroundColor: "#FF0A2B",
  },

  secondary: {
    backgroundColor: "#111820",
    borderWidth: 1,
    borderColor: "#2B2D42",
  },

  danger: {
    backgroundColor: "#A9001C",
  },

  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  pressed: {
    opacity: 0.8,
  },

  disabled: {
    opacity: 0.5,
  },
});