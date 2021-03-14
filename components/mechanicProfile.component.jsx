import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// importing colors
import Colors from "../colors/default.colors";

// importing icons
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const MechanicProfile = () => {
  return (
    <View style={Styles.cardHeaderContainer}>
      <View style={Styles.profileContainer}>
        <View style={Styles.profilePhotoContainer}>
          <Image
            style={Styles.profilePhoto}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mens-hairstyle.com%2Fwp-content%2Fuploads%2F2018%2F07%2F8-Hairtyles-for-Men-with-Oval-Face-473.jpg&f=1&nofb=1",
            }}
          />
        </View>
        <View style={Styles.profileContent}>
          <Text style={Styles.profileName}>Rapido Steven</Text>
          <View style={Styles.ratingContainer}>
            <AntDesign name="star" size={24} color={Colors.golden} />
            <Text style={Styles.ratingText}>4.9</Text>
          </View>
        </View>
      </View>
      <View style={Styles.phoneNumber}>
        <FontAwesome name="phone" size={25} color={Colors.white} />
      </View>
    </View>
  );
};

export default MechanicProfile;

const Styles = StyleSheet.create({
  cardHeaderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  phoneNumber: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  profileContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  profileContent: {
    height: "100%",
  },
  profileName: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 5,
  },
  profilePhoto: {
    height: "100%",
    width: "100%",
  },
  profilePhotoContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 60,
    marginRight: 10,
    overflow: "hidden",
    width: 60,
  },
  ratingContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  ratingText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginLeft: 5,
  },
});
