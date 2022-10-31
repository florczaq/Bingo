import React, { useState } from 'react';
import {
  SafeAreaView
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
    <SafeAreaView>
      <Header />
      <Cells onBingo={onBingo} />
      {gameOver && <WinModal onClick={() => { setGameOver(false) }} />}
    </SafeAreaView>
  );
};

export default App;
