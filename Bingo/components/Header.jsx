import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>BINGO</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 65,
    letterSpacing: 15,
    fontWeight: "700",
    // color: "#6FADEC",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
})


export default Header;