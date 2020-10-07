import React, { useState } from 'react';
import List from '../List';

import { Container } from './styles';

import { Collumn, loadLists } from '../../services/api';

import BoardContext from './context';

const Board: React.FC = () => {

  const [lists, setLists] = useState<Collumn[]>(loadLists());

  function move(fromList: number, toList: number, from: number, to: number) {
    const list = [...lists];
    const dragged = list[fromList].cards[from];

    list[fromList].cards.splice(from, 1);
    list[toList].cards.splice(to, 0, dragged);

    setLists(list);
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {
          lists.map((item, index) => <List key={item.title} index={index} data={item} />)
        }
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
