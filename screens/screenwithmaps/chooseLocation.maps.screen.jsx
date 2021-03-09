import React from "react";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import ChooseLocationMap from "../../components/locations/chooseLocationMap.component";
import ChooseLocationCard from "../../components/locations/chooseLocationCard.component";

// eslint-disable-next-line react/prop-types
const ChooseLocation = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ChooseLocationMap />
      <ChooseLocationCard
        onSelect={() => {
          // eslint-disable-next-line react/prop-types
          navigation.navigate("ConfirmMechanic");
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
  },
});

export default ChooseLocation;
