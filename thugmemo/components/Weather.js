import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    title: "비",
    icon: "weather-rainy"
  },
  Clear: {
    title: "맑음",
    icon: "weather-rainy"
  }
};

export default function Weather({ weatherName, temperature }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color="white"
        size={32}
        name={weatherCases[weatherName].icon}
      />
      <View style={styles.lower}>
        <Text style={styles.title}>{temperature}</Text>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
      </View>
    </View>
  );
  /* props로 데이터를 받아서 뿌려주기만 하는거라 라이프 싸이클이 필요없어서 함수형으로 만드는 것 */
}

const styles = StyleSheet.create({
  container: {},
  lower: {},
  title: {}
});

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};
