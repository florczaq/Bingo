import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';
import Cells from './components/Cells';
import Header from './components/Header';
import WinModal from './components/WinModal';

const App = () => {
  const [gameOver, setGameOver] = useState(false);

  onBingo = () => {
    setGameOver(true);
  }

  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <Cells onBingo={onBingo} />
      {gameOver && <WinModal onClick={() => { setGameOver(false) }} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#2E2E2E"
  }
})

export default App;
