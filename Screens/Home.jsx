import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/base";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

export default Home;