import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd/lib/common/DndProvider';
import Board from './components/Board';

import Header from './components/Header';
import { GlobalStyles } from './GlobalStyles';



function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyles />
    </DndProvider >
  );
}

export default App;
