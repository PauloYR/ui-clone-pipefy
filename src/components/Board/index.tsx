import React, { useState } from 'react';
import List from '../List';

import { Container } from './styles';

import { Collumn, loadLists } from '../../services/api';

import BoardContext from './context';
interface CardState {
  index: number,
  listIndex: number
}

const Board: React.FC = () => {

  const [lists, setLists] = useState<Collumn[]>(loadLists());

  const [card, setCard] = useState<CardState>();

  async function move(fromList: number, toList: number, from: number, to: number, hover: boolean, end: boolean) {
    setCard({ listIndex: fromList, index: from });

    if (hover && !end) {
      const list = [...lists];
      const dragged = list[fromList].cards[from];

      list[fromList].cards.splice(from, 1);
      list[toList].cards.splice(to, 0, dragged);
      setLists(list);
      return;
    }

    if (!end) {
      console.log(card?.listIndex);
      const list = [...lists];
      const dragged = list[toList].cards[to];
      console.log(dragged);
      list[toList].cards.splice(to, 1); //remove
      list[card?.listIndex || 0].cards.splice(card?.index || 0, 0, dragged); //retorn item in you last list
      setLists(list);
    }
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
