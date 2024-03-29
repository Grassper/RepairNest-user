import React from "react";
import { View, StyleSheet, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { Ionicons } from "@expo/vector-icons";

// importing component
import MechanicProfile from "./mechanicProfile.component";
import Divider from "./divider.component";
import CustomButton from "./customButton.component";

const CheckingVehicleCard = ({
  buttonState,
  customstyles,
  buttonPropStateTrue,
  buttonPropStateFalse,
}) => {
  const buttonCustomStyles = {
    backgroundColor: buttonState ? Colors.primaryColor : Colors.accentColor,
  };
  return (
    <View style={{ ...Styles.container, ...customstyles }}>
      <MechanicProfile />
      <Divider />
      <View>
        <Text style={Styles.locationTitle}>
          {"Repair location".toUpperCase()}
        </Text>
        <View style={Styles.locationContainer}>
          <Ionicons name="location-sharp" size={24} color={Colors.red} />
          <View>
            <Text style={Styles.locationText}>
              {"New Colony, Chromepet chennai".substring(0, 25)}...
            </Text>
          </View>
        </View>
      </View>
      <Divider />
      {buttonState ? (
        <CustomButton
          buttonTitle={buttonPropStateTrue.title}
          customStyles={buttonCustomStyles}
          onSelect={buttonPropStateTrue.onSelect}
        />
      ) : (
        <CustomButton
          buttonTitle={buttonPropStateFalse.title}
          customStyles={buttonCustomStyles}
          onSelect={buttonPropStateFalse.onSelect}
        />
      )}
    </View>
  );
};

export default CheckingVehicleCard;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 5,
    height: "30%",
    justifyContent: "space-evenly",
    marginBottom: 20,
    padding: 20,
    width: "90%",
  },
  locationContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    paddingVertical: 10,
  },
  locationText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    paddingLeft: 5,
  },
  locationTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 10,
  },
});
