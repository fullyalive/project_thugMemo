import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Platform,
  ScrollView,
  ActivityIndicator
} from "react-native";
const API_KEY = "272c07fa46ea481e3d7ae840c0fa027c";
import Weather from "./components/Weather";
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadedWeatherApi: false,
      temperature: null,
      weatherName: null,
      error: null
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response =>
        response.json()
      ) /* response라는 객체를 받아와서 json으로 만들어 줄것 (데이터 형변환이라고 생각하면됨)*/
      .then(json => {
        console.log(json);
        console.log(json.main.temp, json.weather[0].main);
        this.setState({
          temperature: json.main.temp,
          weatherName: json.weather[0].main,
          isLoadedWeatherApi: true
        });
      });
  };
  render() {
    const { isLoadedWeatherApi, temperature, weatherName } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={[styles.upperContainer, styles.widthMixin]}>
          <View style={styles.weatherContainer}>
            {isLoadedWeatherApi ? (
              <Weather weatherName="Rain" temperature={17} />
            ) : (
              <View>
                <ActivityIndicator />
              </View>
            )}
          </View>
          <View style={styles.greetingContainer}>
            <Text>인사</Text>
          </View>
          <View style={[styles.clockContainer, styles.widthMixin]}>
            <Text>시간</Text>
          </View>
          <View style={[styles.quoteContainer, styles.widthMixin]}>
            <Text>명언</Text>
          </View>
          <View style={[styles.todoContainer, styles.widthMixin]}>
            <Text>Todo</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  widthMixin: {
    width: width
  },
  upperContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "darkblue"
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: "gray"
  },
  greetingContainer: {
    flex: 1,
    backgroundColor: "pink"
  },
  quoteContainer: {
    flex: 1,
    backgroundColor: "cyan"
  },
  clockContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  todoContainer: {
    flex: 1,
    backgroundColor: "palegreen"
  }
});
