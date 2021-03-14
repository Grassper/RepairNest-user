import React from "react";
import { View, Text, StyleSheet } from "react-native";

// importing colors
import Colors from "../../colors/default.colors";

// importing components
import Divider from "../../components/divider.component";
import CustomButton from "../../components/customButton.component";

const QuoteScreen = ({ navigation }) => {
  const CustomDividerStyle = {
    borderColor: Colors.white,
    marginVertical: 10,
  };
  const buttonCustomSolidStyles = {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    width: "45%",
  };
  const buttonCustomOutlineStyles = {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    width: "45%",
  };
  const buttonTitleStyle = {
    color: Colors.accentColor,
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.receiptContainer}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.header}>{"Repair Fair".toUpperCase()}</Text>
        </View>
        <Divider />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Repair ID".toUpperCase()}</Text>
          <Text style={Styles.itemContent}>#ID-12345</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Problem".toUpperCase()}</Text>
          <Text style={Styles.itemContent}>vehicle breakdown</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Due Date".toUpperCase()}</Text>
          <Text style={Styles.itemContent}>16 Feb 2021</Text>
        </View>
        <Divider customStyles={CustomDividerStyle} />
        <View style={Styles.receiptItems}>
          <Text style={Styles.itemHeading}>{"Nominal".toUpperCase()}</Text>
          <Text style={Styles.itemContent}>Rs 150.00</Text>
        </View>
        <Divider />
        <View style={Styles.buttonContainer}>
          <CustomButton
            buttonTitle="Cancel"
            customStyles={buttonCustomOutlineStyles}
            buttonTitleStyle={buttonTitleStyle}
            onSelect={() => {}}
          />
          <CustomButton
            buttonTitle="Accept"
            customStyles={buttonCustomSolidStyles}
            onSelect={() => {
              navigation.navigate("OrderStatus");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default QuoteScreen;

const Styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  headerContainer: {
    alignItems: "flex-start",
  },
  itemContent: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  itemHeading: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
    paddingBottom: 20,
  },
  receiptContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    padding: 20,
    width: "90%",
  },
});
