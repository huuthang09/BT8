import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function CustomItem(item) {
  if (item.checkinTime != null) {
    return (
      <View>
        <Text style={styles.txtIn}>Checkin Time: {item.checkinTime}</Text>
      </View>
    );
  }

  if (item.checkoutTime != null) {
    return (
      <View>
        <Text style={styles.txtOut}>Checkout Time: {item.checkoutTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    txtIn:{
        marginHorizontal: wp("5%"),
        fontSize: 15,
        color:'#F0F'
    },

    txtOut:{
        marginHorizontal: wp("5%"),
        fontSize: 15,
        color:'#00F'
    }
  });
  