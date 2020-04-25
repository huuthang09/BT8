import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";
import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Toolbar(props) {
  return (
    <View>
      <Appbar.Header style={styles.container}>
        <Appbar.BackAction />
        <Text style={styles.txt}>Leave Calendar</Text>
        <Icon
          type="AntDesign"
          name="pluscircle"
          style={{ color: "#F00" }}
          onPress={props.checkout}
        />
      </Appbar.Header>
      <Button
        title={"Checkin"}
        onPress={props.checkin}
        buttonStyle={styles.btnInStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    elevation: 0,
    backgroundColor: "#FFF",
  },
  btnInStyles: {
    backgroundColor: "#F0F",
    marginVertical: hp("1%"),
    marginHorizontal: wp("30%"),
  },

  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
