import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing components
import GreenMarker from "../components/markers/greenMarker.component";

const ChooseLocation = () => {
  const [region, setRegion] = useState({
    latitude: 12.1269525,
    longitude: 78.1339745,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState({
    latitude: 12.1269525,
    longitude: 78.1339745,
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
    height: "100%",
    width: "100%",
  },
});

export default ChooseLocation;
