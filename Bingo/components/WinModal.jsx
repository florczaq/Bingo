import React from "react";
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import DancingCat from "../assets/GIF/cat.gif";


const WinModal = ({ onClick }) => {
  return <Modal transparent
  >
    <View style={styles.centerModal}>
      <View style={styles.container}>
        <Text style={styles.text}>BINGO!</Text>
        <View style={styles.imageContainer}>
          <Image source={DancingCat} style={styles.image} />
        </View>
        <TouchableOpacity style={styles.button} onPress={onClick}>
          <Text style={styles.buttonText}>AWESOME!</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  centerModal: {
    height: '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: "90%",
    backgroundColor: "#30384F",
    padding: 10,
    borderWidth: 5,
    borderColor: "#121212",
    borderRadius: 20
  },
  text: {
    color: "#fff",
    fontSize: 70,
    height: '15%',
    width: '100%',
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 5,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    elevation: 6,
  },
  imageContainer: {
    backgroundColor: "#121212",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 3
  },
  button: {
    backgroundColor: "#6FADEC",
    width: '70%',
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 20,
    elevation: 6
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 25,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
})

export default WinModal;