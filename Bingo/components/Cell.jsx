import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Cell = ({ id, text, selected, onClick }) => {
  return <TouchableOpacity
    style={[
      styles.cell,
      selected && styles.selected_cell
    ]}
    onPress={() => onClick(id)}
  >
    <Text style={[
      styles.text,
      selected && styles.selected_text
    ]}>
      {text}
    </Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "#eef",
    width: "25%",
    height: "25%",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderColor: "#121212"

  },
  text: {
    color: "#000",
    textAlign: "center",
    fontWeight: '600'
  },
  selected_cell: {
    backgroundColor: '#3C91E6',
    borderColor: "#fff",
    borderWidth: 1
  },
  selected_text: {
    color: "#fff",
    fontWeight: '800',
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
});

export default Cell;