import React from "react";
import { StyleSheet, View, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ChooseLocationMap from "../components/locations/chooseLocationMap.component";
import ConfirmMechanicCard from "../components/locations/confirmMechanicCard.component";

const ConfirmMechanic = () => {
  const ChooseLocationCustomStyle = {
    height: "70%",
  };
  const ConfirmMechanicCardCustomStyle = {
    height: "30%",
  };
  return (
    <View style={Styles.container}>
      <ChooseLocationMap customstyles={ChooseLocationCustomStyle} />
      <ConfirmMechanicCard customstyles={ConfirmMechanicCardCustomStyle} />
    </View>
  );
};

export default ConfirmMechanic;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});
