import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import Content from "../Components/Content";
import { StyleSheet, View, FlatList, Text, Alert } from "react-native";
import axios from "axios";
import _ from "lodash";
import CustomItem from "../Components/CustomItem";
import moment from "moment";
import Toolbar from "../Components/Toolbar";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getDataRequest } from "../actions/GetActions";

export default function CustomCalendar() {
  const api = useSelector((state) => state.getData);
  const dispatch = useDispatch();

  const [newDateData, setData] = useState({
    dateData: [],
  });

  const [checkin, setCheck] = useState({
    isCheck: false,
  });

  useEffect(() => {
    console.disableYellowBox = true;
    getData(moment().format("YYYY-MM-DD"));
  }, []);

  async function getData(dateString) {
    try {
      dispatch(getDataRequest());
      const data = _.filter(api.data, (data) => {
        if (data.date.includes(dateString)) {
          return true;
        } else false;
      });

      setData({
        dateData: data,
      });
    } catch (error) {
    }
  }

  async function setCheckin() {
    try {
      const now = moment().format("YYYY-MM-DD");
      const time = moment().format("YYYY-MM-DD HH:mm:ss");
      const response = await axios({
        method: "post",
        url: "https://5e926b7cbbff810016968e85.mockapi.io/test",
        data: {
          date: now,
          checkinTime: time,
        },
      });

      if (response != null) {
        setCheck({
          isCheck: true,
        });
        Alert.alert("Checkin thành công");
        getData(moment().format("YYYY-MM-DD"));
      }
    } catch (error) {
    }
  }

  async function setCheckout() {
    if (checkin.isCheck) {
      try {
        var moment = require("moment");
        const now = moment().format("YYYY-MM-DD");
        const time = moment().format("YYYY-MM-DD HH:mm:ss");
        const response = await axios({
          method: "post",
          url: "https://5e926b7cbbff810016968e85.mockapi.io/test",
          data: {
            date: now,
            checkoutTime: time,
          },
        });

        if (response != null) {
          Alert.alert("Checkout thành công");
          getData(moment().format("YYYY-MM-DD"));
        } else {
          Alert.alert("Checkout thất bại");
        }
      } catch (error) {
      }
    } else {
      Alert.alert("Vui lòng Checkin trước");
    }
  }

  return (
    <View style={styles.container}>
      <Toolbar checkin={setCheckin} checkout={setCheckout} />
      <ScrollView>
        <Calendar
          markedDates={{
            "2020-04-02": {
              selected: true,
              selectedColor: "#93e6ff",
            },
            "2020-04-03": {
              selected: true,
              selectedColor: "#93e6ff",
            },
            "2020-04-08": {
              selected: true,
              selectedColor: "#719eff",
            },
            "2020-04-09": {
              selected: true,
              selectedColor: "#719eff",
            },
            "2020-04-20": {
              selected: true,
              selectedColor: "#ff8fcb",
            },
            "2020-04-21": {
              selected: true,
              selectedColor: "#ff8fcb",
            },
            "2020-04-22": {
              selected: true,
              selectedColor: "#ff8fcb",
            },
            "2020-04-30": {
              selected: true,
              selectedColor: "#ffba6f",
            },
          }}
          onDayPress={(day) => getData(day.dateString)}
        />
        <Content />

        <Text style={styles.txt}>CHECKIN/CHECKOUT TIME LIST</Text>

        <FlatList
          data={newDateData.dateData}
          renderItem={({ item }) => CustomItem(item)}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    alignSelf: "center",
    color: "#F00",
    fontWeight: "bold",
  },

  container: {
    flex: 1,
  },
});
