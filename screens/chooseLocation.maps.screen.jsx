import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import GreenMarker from "../components/markers/greenMarker.component";
import ChooseLocationCard from "../components/locations/chooseLocationCard.component";

const ChooseLocation = () => {
  const [region, setRegion] = useState({
    latitude: 12.9515957,
    longitude: 80.1414093,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState({
    latitude: 12.9515957,
    longitude: 80.1414093,
  });
  return (
    <View style={Styles.container}>
      <MapView
        style={Styles.map}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker
          draggable={true}
          coordinate={marker}
          onDragEnd={(e) => {
            setMarker(e.nativeEvent.coordinate);
          }}
        >
          <GreenMarker />
        </Marker>
      </MapView>
      <ChooseLocationCard />
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
  map: {
    height: "70%",
    width: "100%",
  },
});

export default ChooseLocation;
