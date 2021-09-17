import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Alejandro";
  const secondText = <Text style={styles.textStyle}>My name is {name}</Text>;

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      {secondText}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
