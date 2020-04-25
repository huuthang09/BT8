import React from "react";
import { StyleSheet, View } from "react-native";
import CustomCalendar from "../Components/CustomCalendar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default function Screens() {
  
  return (
    <View style={styles.container}>
        <CustomCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp("2%"),
    flex: 1,
    backgroundColor: "#fff",
  },
});
