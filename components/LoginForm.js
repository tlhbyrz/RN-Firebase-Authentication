import React from "react";
import { StyleSheet, View } from "react-native";

import Logo from "./Logo";
import EmailAndPassword from "./EmailAndPassword";

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flexLogo}>
          <Logo />
        </View>
        <View style={styles.flexEmail}>
          <EmailAndPassword />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flexLogo: {
    flex: 1
  },
  flexEmail: {
    flex: 2
  }
});
