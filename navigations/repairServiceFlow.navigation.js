import React from "react";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import ChooseLocation from "../screens/chooseLocation.maps.screen";
import ConfirmMechanic from "../screens/confirmMechanic.maps.screen";
import BookingConfirmed from "../screens/bookingConfirmed.maps.screen.jsx";

const Stack = createStackNavigator();

const RepairServiceStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "",
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      <Stack.Screen name="ConfirmMechanic" component={ConfirmMechanic} />
      <Stack.Screen name="BookingConfirmed" component={BookingConfirmed} />
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
