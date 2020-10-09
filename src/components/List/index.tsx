import React, { useContext, useRef, useState } from 'react';

import { Container, AddCard } from './styles';

import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import { Collumn } from '../../services/api';

import BoardContext from '../Board/context';

interface Props {
  data: Collumn,
  index: number
}

const List: React.FC<Props> = ({ data, index: listIndex }) => {

  const refAddCard = useRef<HTMLInputElement>(null);

  const [addCard, setAddCard] = useState<boolean>(false);

  const { lists, setLists } = useContext(BoardContext);

  const getMaxId = () => {    

    if(!refAddCard.current?.value) return;

    const idMax = Math.max.apply(Math,
      lists.map(list => Math.max.apply(Math,
        list.cards.map(card => card.id))
      ));    

    const newList = [...lists];

    newList[listIndex].cards.splice(0, 0, {
      id: idMax + 1,
      content: refAddCard.current?.value || '',
      labels: ['#7159c1'],

    });

    setLists(newList);
    
    setAddCard(false);

  }

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {
          data.creatable && (
            <button type="button">
              <MdAdd size={24} color={"#FFF"} onClick={() => setAddCard(true)} />
            </button>
          )
        }
      </header>
      {
        addCard && (
          <AddCard>
            <input autoFocus={true} type="text" ref={refAddCard} placeholder={'Escreva o titulo do cartão ...'} />
            <button onClick={() => getMaxId()}>Adicionar Cartão</button>
          </AddCard>
        )
      }
      <ul>
        {
          data.cards.map((card, index) => <Card key={card.id} index={index} data={card} listIndex={listIndex} />)
        }
      </ul>
    </Container>
  );
};

export default List;
