import React, { useState } from 'react';
import List from '../List';

import { Container } from './styles';

import { Collumn, loadLists } from '../../services/api';

import BoardContext from './context';

const Board: React.FC = () => {

  const [lists, setLists] = useState<Collumn[]>(loadLists());

  function move(from, to) {

  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {
          lists.map(item => <List key={item.title} data={item} />)
        }
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
