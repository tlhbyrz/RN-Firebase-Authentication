import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
          }}
          style={{ width: 150, height: 150, marginTop: 30 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10
  }
});
