import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Назад</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 5,
  
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
