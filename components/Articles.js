import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import firebase from "firebase";

export default class Articles extends React.Component {
  _onLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hellotext}>
          {" "}
          Welcome! You have successfully logged in with firebase{" "}
        </Text>

        <TouchableOpacity onPress={this._onLogout} style={styles.button}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  hellotext: {
    fontSize: 15,
    color: "black"
  },
  text: {
    color: "white",
    fontSize: 20
  },
  button: {
    marginTop: 5,
    alignItems: "center",
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 7,
    height: 45,
    width: 150,
    justifyContent: "center"
  }
});
