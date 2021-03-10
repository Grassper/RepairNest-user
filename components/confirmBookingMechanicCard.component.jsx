import React from "react";
import { StyleSheet, View, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { MaterialIcons } from "@expo/vector-icons";

// importing components
import Divider from "./divider.component";
import CustomButton from "./customButton.component";
import MechanicProfile from "./mechanicProfile.component";
import DashBoard from "./dashBoard.component";

const ConfirmBookingMechanicCard = ({
  onSelectArrived,
  onSelectCancel,
  customstyles,
}) => {
  const buttonCustomSolidStyles = {
    backgroundColor: Colors.primaryColor,
    width: "45%",
  };
  const buttonCustomOutlineStyles = {
    backgroundColor: Colors.accentColor,
    width: "45%",
  };
  return (
    <View style={{ ...Styles.container, ...customstyles }}>
      <MechanicProfile />
      <Divider />
      <DashBoard />
      <Divider />
      <View style={Styles.buttonContainer}>
        <CustomButton
          buttonTitle="Cancel"
          customStyles={buttonCustomOutlineStyles}
          onSelect={onSelectCancel}
        />
        <CustomButton
          buttonTitle="Arrived"
          customStyles={buttonCustomSolidStyles}
          onSelect={onSelectArrived}
        />
      </View>
    </View>
  );
};

export default ConfirmBookingMechanicCard;

const Styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: Colors.white,
    height: "40%",
    justifyContent: "space-evenly",
    padding: 20,
    width: "100%",
  },
});
