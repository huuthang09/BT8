import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Content() {
  return (
    <View>
      <View style={styles.container}>
        <Icon type="FontAwesome" name="circle" style={{ color: "#709dff" }} />
        <Text style={styles.txt}>Annual Leave</Text>
      </View>

      <View style={styles.container}>
        <Icon type="FontAwesome" name="circle" style={{ color: "#8fe4ff" }} />
        <Text style={styles.txt}>Hopitalization Sick Leave</Text>
      </View>

      <View style={styles.container}>
        <Icon type="FontAwesome" name="circle" style={{ color: "#ff8eca" }} />
        <Text style={styles.txt}>Medical Leave Outpatient</Text>
      </View>

      <View style={styles.container}>
        <Icon type="FontAwesome" name="circle" style={{ color: "#ffb96e" }} />
        <Text style={styles.txt}>Children Leave</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("2%"),
    flexDirection: "row",
    alignItems: "center",
  },

  txt: {
    marginLeft: wp("3%"),
  },
});
