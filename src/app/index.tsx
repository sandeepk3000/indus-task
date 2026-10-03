import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { scale, verticalScale } from "../../utils/styling";
import { Colors } from "../../theme/colors";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/main.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background.main,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: verticalScale(200),
    height:verticalScale(200),
  },
  });