import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Articles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Articles </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
