import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

interface TypographyProps extends TextProps {
  children: React.ReactNode;
  size?: number;
  weight?: TextStyle["fontWeight"];
  color?: string;
  style?: TextStyle;
}

export default function Typography({
  children,
  size = 16,
  weight = "400",
  color = "#3b0a0a",
  style,
  ...props
}: TypographyProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontSize: size,
          fontWeight: weight,
          color,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}