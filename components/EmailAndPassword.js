import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class EmailAndPassword extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor="black"
          placeholder="email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor="black"
          placeholder="password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.errortext}>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginHorizontal: 20,
    marginTop: 5,
    padding: 10,
    backgroundColor: "orange",
    color: "black",
    fontSize: 15,
    borderRadius: 5,
    height: 45
  },
  button: {
    marginTop: 5,
    alignItems: "center",
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 7,
    height: 55
  },
  text: {
    color: "white",
    fontSize: 20
  },
  errortext: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
    marginTop: 12
  }
});
