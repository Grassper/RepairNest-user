import React from "react";

// importing colors
import Colors from "../colors/default.colors";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import ChooseLocation from "../screens/screenwithmaps/chooseLocation.maps.screen";
import ConfirmMechanic from "../screens/screenwithmaps/confirmMechanic.maps.screen";
import BookingConfirmed from "../screens/screenwithmaps/bookingConfirmed.maps.screen.jsx";
import CheckingVehicle from "../screens/vehiclescreen/checking.vehicle.screen";

const Stack = createStackNavigator();

const RepairServiceStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerTransparent: true,
        headerTintColor: Colors.accentColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Montserrat_700Bold",
        },
      }}
    >
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      <Stack.Screen name="ConfirmMechanic" component={ConfirmMechanic} />
      <Stack.Screen name="BookingConfirmed" component={BookingConfirmed} />
      <Stack.Screen
        name="CheckingVehicle"
        component={CheckingVehicle}
        options={{
          title: "Checking Vehicle",
        }}
      />
    </Stack.Navigator>
  );
};

const NavContainer = () => {
  return (
    <NavigationContainer>
      <RepairServiceStackNavigation />
    </NavigationContainer>
  );
};

export default NavContainer;
