import React from "react";
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import DancingCat from "../assets/GIF/cat.gif";


const WinModal = ({ onClick }) => {
  return <Modal transparent
  >
    <View style={styles.centerModal}>
      <View style={styles.container}>
        <Text style={styles.text}>BINGO</Text>
        <Image source={DancingCat} style={styles.image} />
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
    backgroundColor: "lightblue",
    padding: 10,
    borderWidth: 10,
    borderColor: "#444",
    borderRadius: 40
  },
  text: {
    color: "#fff",
    fontSize: 70,
    height: '20%',
    width: '100%',
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 5,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  image: {
    width: "90%",
    height: "40%",
    elevation: 6,
  },
  button: {
    backgroundColor: "lime",
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