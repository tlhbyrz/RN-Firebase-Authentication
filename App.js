import React from "react";
import { StyleSheet, Text, View } from "react-native";

import firebase from "firebase";

import LoginForm from "./components/LoginForm";
import Articles from "./components/Articles";
import Loading from "./components/Loading";

export default class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyB0-7fo5-qQtn9ueNGPkMSdNx239BJZiB4",
      authDomain: "react-native-firebase-au-b9aca.firebaseapp.com",
      databaseURL: "https://react-native-firebase-au-b9aca.firebaseio.com",
      projectId: "react-native-firebase-au-b9aca",
      storageBucket: "react-native-firebase-au-b9aca.appspot.com",
      messagingSenderId: "950639017747",
      appId: "1:950639017747:web:9798add230270498a364e6",
      measurementId: "G-Q7VT7VYPC9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    if (this.state.loggedIn == null) {
      return <Loading />;
    }
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
