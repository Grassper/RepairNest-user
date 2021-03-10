import React, { useState } from "react";
import { View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import CheckingVehicleCard from "../../components/checkingVehicleCard.component";

// importing icons
import { Ionicons } from "@expo/vector-icons";

const CheckingVehicle = ({ navigation }) => {
  const [quote, setQuote] = useState(true);
  return (
    <View style={Styles.container}>
      <View style={Styles.illustrationContainer}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.image}
            source={require("../../assets/images/checkingVehicleImage.png")}
          />
        </View>
        {!quote ? (
          <View style={Styles.indicatorContainer}>
            <ActivityIndicator
              style={Styles.spinner}
              size="large"
              color={Colors.primaryColor}
            />
            <Text style={Styles.indicatorText}>Analysing your vehicle</Text>
          </View>
        ) : (
          <View style={Styles.indicatorContainer}>
            <Ionicons
              name="md-checkmark-circle"
              size={30}
              style={Styles.icon}
              color={Colors.primaryColor}
            />
            <Text style={Styles.indicatorText}>Analysing Completed</Text>
          </View>
        )}
      </View>
      <CheckingVehicleCard quote={quote} navigation={navigation} />
    </View>
  );
};

export default CheckingVehicle;

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "space-around",
  },
  icon: {
    paddingBottom: 10,
  },
  illustrationContainer: {
    alignItems: "center",
    height: "65%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: 235,
    marginTop: "35%",
    width: 235,
  },
  indicatorContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  indicatorText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
  },
  spinner: {
    marginBottom: 10,
  },
});
