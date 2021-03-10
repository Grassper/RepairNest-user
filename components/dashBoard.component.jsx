import React from "react";
import { StyleSheet, View, Text } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { MaterialIcons } from "@expo/vector-icons";

const DashBoard = () => {
  return (
    <View style={Styles.contentContainer}>
      <View style={Styles.contentItem}>
        <MaterialIcons name="car-repair" size={50} color={Colors.accentColor} />
      </View>
      <View style={Styles.contentItem}>
        <Text style={Styles.contentItemHeading}>
          {"Distance".toUpperCase()}
        </Text>
        <Text style={Styles.contentItemText}>0.2km</Text>
      </View>
      <View style={Styles.contentItem}>
        <Text style={Styles.contentItemHeading}>{"Time".toUpperCase()}</Text>
        <Text style={Styles.contentItemText}>2min</Text>
      </View>
      <View style={Styles.contentItem}>
        <Text style={Styles.contentItemHeading}>{"Price".toUpperCase()}</Text>
        <Text style={Styles.contentItemText}>$25.00</Text>
      </View>
    </View>
  );
};

export default DashBoard;

const Styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  contentItemHeading: {
    color: Colors.grey,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    paddingBottom: 10,
  },
  contentItemText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
  },
});
