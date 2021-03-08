import React from "react";
import { StyleSheet, View, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ChooseLocationMap from "../components/locations/chooseLocationMap.component";

const ConfirmMechanic = () => {
  return (
    <View style={Styles.container}>
      <Text>Hello from confirm mechanic screen</Text>
    </View>
  );
};

export default ConfirmMechanic;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
