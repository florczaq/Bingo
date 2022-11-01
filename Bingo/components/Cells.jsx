import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Cell from './Cell';
import * as Storage from "../LocalStorageManager"


const bingoTexts = [
  "Castorama",
  "Skala ocen od 1 do 5",
  "Stukanie w biurko",
  "Ja nikogo nie przekrzycze",
  "Nowak",
  "Telefony",
  "Opierdol",
  "Zakończyć rozmowy",
  "Pizda przy tablicy",
  "Drozd",
  "To jest przecież proste",
  "Karty wzorów",
  "Łopata",
  "Nikt nie pytał",
  "Ciszej bądź jeden z drugim",
  "Kto ci pozwolił mówić",
]


/**
 * "Co się dzieje z Kawalcem",
 * "To nie koncert życzeń",
 * "Skeretariat i papiery",
 * "Rozumiecie? (nie) To idziemy dalej"
 * "Ucisza tego co nie trzeba",
 * "Nic się nie uczycie",
 * "Czy ja komuś przeszkadzam",
 * '"Fajne","proste" zadanko'
 */
const RenderCell = ({ selectedCells = [], onCellClick }) => {
  return <>
    {
      bingoTexts.map((element, index) => {
        return <Cell
          id={index}
          text={element}
          key={index}
          selected={selectedCells[index]}
          onClick={onCellClick}
        />
      })
    }
  </>
}

const storageKey = "selectedCells";

class Cells extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCells: []
    }
    this.onCellClick = this.onCellClick.bind(this)
  }

  componentDidMount = () => {
    Storage.readData(storageKey).then(res => {
      this.setState({ selectedCells: res || [] })
    }).catch(err => {
      console.log(err);
      this.setState({ selectedCells: [] })
    })
  }

  onBingo = () => {
    this.props.onBingo();
    Storage.removeData(storageKey);
    this.setState({ selectedCells: [] })
  }

  checkGameOver = (arr = []) => {
    for (let i = 0; i < arr.length; i += 4)
      if (arr[i] && arr[i + 1] && arr[i + 2] && arr[i + 3])
        return true;

    for (let i = 0; i < arr.length / 4; i++)
      if (arr[i] && arr[i + 4] && arr[i + 8] && arr[i + 12])
        return true;

    if (arr[0] && arr[5] && arr[10] && arr[15])
      return true;

    if (arr[3] && arr[6] && arr[9] && arr[12])
      return true;

    return false;
  }

  onCellClick = (id) => {
    let temp = this.state.selectedCells;
    temp[id] = !temp[id];
    this.setState({ selectedCells: temp })
    if (this.checkGameOver(temp)) this.onBingo();
    Storage.saveData(storageKey, temp)
    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.cellContainer}>
          <RenderCell
            selectedCells={this.state.selectedCells}
            onCellClick={this.onCellClick}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cellContainer: {
    width: "95%",
    height: "60%",
    flexDirection: "row",
    alignItems: 'center',
    flexWrap: "wrap",
    marginVertical: 20,
    borderWidth: 4,
    borderColor: "#121212"
  }
});
export default Cells;
