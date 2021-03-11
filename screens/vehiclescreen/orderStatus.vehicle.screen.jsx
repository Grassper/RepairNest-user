import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import CheckingVehicleCard from "../../components/checkingVehicleCard.component";

// importing icons
import { Ionicons } from "@expo/vector-icons";

const OrderStatus = ({ navigation }) => {
  const [completed, setCompleted] = useState(true);
  return (
    <View style={Styles.container}>
      <View style={Styles.illustrationContainer}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.image}
            source={require("../../assets/images/repairingImage.png")}
          />
        </View>
        {!completed ? (
          <View style={Styles.indicatorContainer}>
            <ActivityIndicator
              style={Styles.spinner}
              size="large"
              color={Colors.primaryColor}
            />
            <Text style={Styles.indicatorText}>Repairing your vehicle</Text>
          </View>
        ) : (
          <View style={Styles.indicatorContainer}>
            <Ionicons
              name="md-checkmark-circle"
              size={30}
              style={Styles.icon}
              color={Colors.primaryColor}
            />
            <Text style={Styles.indicatorText}>Repairing Completed</Text>
          </View>
        )}
      </View>
      <CheckingVehicleCard
        buttonState={completed}
        buttonPropStateTrue={{
          title: "Submit a Review",
          onSelect: () => {
            navigation.navigate("RateYourMechanic");
          },
        }}
        buttonPropStateFalse={{
          title: "Back To Homescreen",
          onSelect: () => {
            navigation.navigate("ChooseLocation");
          },
        }}
      />
    </View>
  );
};

export default OrderStatus;

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
    height: windowHeight * 0.4,
    marginTop: "35%",
    padding: 20,
    width: windowWidth * 0.95,
  },
  indicatorContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  indicatorText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
  },
  spinner: {
    marginBottom: 10,
  },
});
