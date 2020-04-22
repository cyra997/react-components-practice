import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <View>
      <Card>
        <Text>Hello</Text>
      </Card>
      <Card>
        <Text>Hi there</Text>
      </Card>
      <Card>
        <Text>Good</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
