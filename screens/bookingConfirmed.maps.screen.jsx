import React from "react";
import { StyleSheet, View, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import ChooseLocationMap from "../components/locations/chooseLocationMap.component";
import MechanicCard from "../components/locations/mechanicCard.component";

const BookingConfirmed = () => {
  const ChooseLocationCustomStyle = {
    height: "70%",
  };
  const MechanicCardCustomStyle = {
    height: "30%",
  };
  return (
    <View style={Styles.container}>
      <ChooseLocationMap customstyles={ChooseLocationCustomStyle} />
      <MechanicCard
        customstyles={MechanicCardCustomStyle}
        buttonColor={Colors.accentColor}
        buttonTitle="Cancel Repair"
      />
    </View>
  );
};

export default BookingConfirmed;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});
