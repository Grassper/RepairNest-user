import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing icons
import { EvilIcons } from "@expo/vector-icons";

// importing components
import Divider from "../divider.component";
import CustomButton from "../customButton.component";

// eslint-disable-next-line react/prop-types
const ChooseLocationCard = ({ onSelect, customstyles }) => {
  return (
    <View style={{ ...Styles.cardContainer, ...customstyles }}>
      <View style={Styles.cardHeaderContainer}>
        <Text style={Styles.header}>Select Repair Location</Text>
      </View>
      <Divider />
      <View style={Styles.contentContainer}>
        <Text style={Styles.locationTitle}>
          {"Your location".toUpperCase()}
        </Text>
        <View style={Styles.locationContainer}>
          <View style={Styles.leftSection}>
            <EvilIcons name="check" size={24} color={Colors.primaryColor} />
            <View>
              <Text style={Styles.locationText}>
                {"New Colony, Chromepet chennai".substring(0, 20)}...
              </Text>
            </View>
          </View>
          <Text
            style={Styles.change}
            onPress={() => {
              console.log("change pressed");
            }}
          >
            {"Change".toUpperCase()}
          </Text>
        </View>
      </View>
      <Divider />
      <CustomButton buttonTitle="Request Repair" onSelect={onSelect} />
    </View>
  );
};

export default ChooseLocationCard;

const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    height: "30%",
    padding: 20,
    width: "100%",
  },
  cardHeaderContainer: {
    alignItems: "flex-start",
  },
  change: {
    color: Colors.primaryColor,
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  header: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
  },

  leftSection: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  locationContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
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
