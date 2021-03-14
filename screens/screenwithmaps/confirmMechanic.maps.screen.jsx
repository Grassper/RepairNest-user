import React from "react";
import { StyleSheet, View, Alert } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import ChooseLocationMap from "../../components/chooseLocationMap.component";
import MechanicCard from "../../components/mechanicCard.component";

const ConfirmMechanic = ({ navigation }) => {
  const BookingHandler = () =>
    Alert.alert(
      "Booking successful",
      "Mechanic will here with you in 2 minutes.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
          style: "cancel",
        },
        {
          text: "Done",
          onPress: () => navigation.navigate("BookingConfirmed"),
        },
      ],
      { cancelable: false }
    );
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
        buttonColor={Colors.primaryColor}
        buttonTitle="Confirm Repair"
        onSelect={() => {
          BookingHandler();
        }}
      />
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
