import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/Colors";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
