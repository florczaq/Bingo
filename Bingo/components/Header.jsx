import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>BINGO</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 65,
    letterSpacing: 15,
    fontWeight: "700",
    color: "aqua",
  }
})


export default Header;