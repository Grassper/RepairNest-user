import React from "react";

// importing navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
import ChooseLocation from "../screens/chooseLocation.maps.screen";
import ConfirmMechanic from "../screens/confirmMechanic.maps.screen";

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
