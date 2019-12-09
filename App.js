import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginForm from "./components/LoginForm";
import Articles from "./components/Articles";

export default class App extends React.Component {
  state = {
    loggedIn: false
  };
  render() {
    if (!this.state.loggedIn) {
      return <LoginForm />;
    } else {
      return <Articles />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
