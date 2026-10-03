import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../theme/colors";

interface ScreenWrapperProps {
  children: ReactNode;
  scroll?: boolean;
  keyboardAvoiding?: boolean;
  padding?: number;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

export default function ScreenWrapper({
  children,
  scroll = false,
  keyboardAvoiding = false,
  padding = 16,
  style,
  contentContainerStyle,
}: ScreenWrapperProps) {
  const content = scroll ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.scrollContent,
        { padding },
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, { padding }, style]}>{children}</View>
  );

  const screen = (
    <SafeAreaView style={[styles.container, style]}>
      {content}
    </SafeAreaView>
  );

  if (keyboardAvoiding) {
    return (
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {screen}
      </KeyboardAvoidingView>
    );
  }

  return screen;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.dark.background.main,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },
});