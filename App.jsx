import React from "react";
import { StyleSheet, View } from "react-native";

// importing screens
import ChooseLocation from "./screens/chooseLocation.maps.screen";

// importing colors
import Colors from "./colors/default.colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ChooseLocation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
