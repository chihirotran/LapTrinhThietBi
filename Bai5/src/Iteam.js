import React from "react";
import { StyleSheet, View, Text } from "react-native";
 
export default function Item({name}) {
  return (
    <View style={styles.items}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fd79a8",
    margin: 10,
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  itemText: {
    color: "white",
  },
});