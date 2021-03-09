import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CheckingVehicle = () => {
  return (
    <View style={Styles.container}>
      <Text>Hello from checkingVehicle</Text>
    </View>
  );
};

export default CheckingVehicle;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
