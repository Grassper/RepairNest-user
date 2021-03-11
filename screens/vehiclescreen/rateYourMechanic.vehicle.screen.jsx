import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import CustomButton from "../../components/customButton.component";
import Divider from "../../components/divider.component";

// importing icons
import { AntDesign } from "@expo/vector-icons";

const RateYourMechanic = () => {
  const [text, setText] = useState("");
  const buttonCustomSolidStyles = {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    paddingVertical: 15,
    width: "100%",
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.RatingCard}>
        <View style={Styles.profilePhotoContainer}>
          <Image
            style={Styles.profilePhoto}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mens-hairstyle.com%2Fwp-content%2Fuploads%2F2018%2F07%2F8-Hairtyles-for-Men-with-Oval-Face-473.jpg&f=1&nofb=1",
            }}
          />
        </View>
        <Text style={Styles.heading}>How is your Repair ?</Text>
        <Text style={Styles.subHeading}>
          Your feedback will help improve repair experience
        </Text>
        <View style={Styles.stars}>
          <AntDesign name="star" size={44} color={Colors.borderColor} />
          <AntDesign name="star" size={44} color={Colors.borderColor} />
          <AntDesign name="star" size={44} color={Colors.borderColor} />
          <AntDesign name="star" size={44} color={Colors.borderColor} />
          <AntDesign name="star" size={44} color={Colors.borderColor} />
        </View>
        <TextInput
          multiline={true}
          numberOfLines={5}
          onChangeText={(text) => setText(text)}
          placeholder="Describe your experience..."
          value={text}
          textAlign="left"
          textAlignVertical="top"
          style={Styles.textBox}
        />
        <CustomButton
          buttonTitle="Submit Review"
          customStyles={buttonCustomSolidStyles}
          onSelect={() => {}}
        />
      </View>
    </View>
  );
};

export default RateYourMechanic;

const Styles = StyleSheet.create({
  RatingCard: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    height: 500,
    justifyContent: "center",
    justifyContent: "space-around",
    marginBottom: "10%",
    padding: 20,
    width: "90%",
  },

  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: "flex-end",
  },
  heading: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    textTransform: "capitalize",
  },
  profilePhoto: {
    height: "100%",
    width: "100%",
  },
  profilePhotoContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 100,
    marginTop: "-25%",
    overflow: "hidden",
    width: 100,
  },
  stars: {
    flexDirection: "row",
  },
  subHeading: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  textBox: {
    backgroundColor: Colors.borderColor,
    borderRadius: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    opacity: 0.5,
    padding: 20,
    width: "100%",
  },
});
