import React from "react";
import { View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import CheckingVehicleCard from "../../components/checkingVehicleCard.component";

const CheckingVehicle = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.illustrationContainer}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.image}
            source={require("../../assets/images/checkingVehicleImage.png")}
          />
        </View>
        <View style={Styles.indicatorContainer}>
          <ActivityIndicator
            style={Styles.spinner}
            size="large"
            color={Colors.primaryColor}
          />
          <Text style={Styles.indicatorText}>Analysing your vehicle</Text>
        </View>
      </View>
      <CheckingVehicleCard
        buttonColor={Colors.accentColor}
        buttonTitle="Cancel Repair"
        onSelect={() => {}}
      />
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
  illustrationContainer: {
    alignItems: "center",
    height: "65%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: 270,
    marginTop: "35%",
    width: 270,
  },
  indicatorContainer: {
    marginVertical: 20,
  },
  indicatorText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  spinner: {
    marginBottom: 10,
  },
});
