import React from "react";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import ChooseLocationMap from "../../components/locations/chooseLocationMap.component";
import ConfirmBookingMechanicCard from "../../components/locations/confirmBookingMechanicCard.component";

const BookingConfirmed = ({ navigation }) => {
  const ChooseLocationCustomStyle = {
    height: "70%",
  };
  const MechanicCardCustomStyle = {
    height: "30%",
  };
  return (
    <View style={Styles.container}>
      <ChooseLocationMap customstyles={ChooseLocationCustomStyle} />
      <ConfirmBookingMechanicCard
        customstyles={MechanicCardCustomStyle}
        onSelectArrived={() => navigation.navigate("CheckingVehicle")}
        onSelectCancel={() => {}}
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
