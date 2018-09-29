import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Greeting extends Component {
  static defaultProps = {
    name: "World"
  };
  render() {
    return <Text>Hello {this.props.name} !</Text>;
  }
}

const UserList = ["문대성", "이재형", "김민호", "나플라"];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleCountAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleCountMinus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  handleCountReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Greeting name="이재형" />
        {UserList.map((user, index) => {
          return <Greeting name={user} key={index} />;
        })}
        <Text>Count : {this.state.count}</Text>
        <Button onPress={this.handleCountAdd} title="더하기" style={styles.button}/>
        <Button onPress={this.handleCountMinus} title="빼기" color="#3fa9fd" />
        <Button onPress={this.handleCountReset} title="리셋" color="#3fa9fd" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "red",
    color: "white"
  }
});
