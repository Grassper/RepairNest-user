import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import Divider from "./divider.component";
import CustomButton from "./customButton.component";
import MechanicProfile from "./mechanicProfile.component";
import DashBoard from "./dashBoard.component";

const MechanicCard = ({ customstyles, onSelect, buttonTitle, buttonColor }) => {
  const buttonCustomStyles = {
    backgroundColor: buttonColor,
  };
  return (
    <View style={{ ...Styles.container, ...customstyles }}>
      <MechanicProfile />
      <Divider />
      <DashBoard />
      <Divider />
      <CustomButton
        buttonTitle={buttonTitle}
        customStyles={buttonCustomStyles}
        onSelect={onSelect}
      />
    </View>
  );
};

export default MechanicCard;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: "40%",
    justifyContent: "space-evenly",
    padding: 20,
    width: "100%",
  },
});
