import React from "react";
import { View, StyleSheet, Text } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing icons
import { Ionicons } from "@expo/vector-icons";

const RepairCompleted = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.RatingCard}>
        <Ionicons
          name="checkmark-circle-sharp"
          size={100}
          color={Colors.primaryColor}
        />
        <Text style={Styles.heading}>Repair Completed</Text>
      </View>
    </View>
  );
};

export default RepairCompleted;

const Styles = StyleSheet.create({
  RatingCard: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    height: "35%",
    justifyContent: "space-evenly",
    padding: 30,
    width: "90%",
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
  },
});
