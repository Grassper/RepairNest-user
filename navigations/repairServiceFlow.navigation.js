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
import QuoteScreen from "../screens/vehiclescreen/quotes.vehicle.screen";
import OrderStatus from "../screens/vehiclescreen/orderStatus.vehicle.screen";
import RateYourMechanic from "../screens/vehiclescreen/rateYourMechanic.vehicle.screen";

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
          fontFamily: "Montserrat_600SemiBold",
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
      <Stack.Screen
        name="QuoteScreen"
        component={QuoteScreen}
        options={{
          title: "Order Details",
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name="OrderStatus"
        component={OrderStatus}
        options={{
          title: "Order Status",
        }}
      />
      <Stack.Screen
        name="RateYourMechanic"
        component={RateYourMechanic}
        options={{
          title: "Rate Your Mechanic",
          headerTintColor: Colors.white,
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
