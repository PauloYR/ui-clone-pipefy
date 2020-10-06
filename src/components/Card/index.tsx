import React, { useContext, useRef } from 'react';
import { Container, Label } from './styles';
import { Card as CardData } from '../../services/api';
import { useDrop, useDrag } from 'react-dnd/lib/hooks/';

import BoardContenxt from '../Board/context'  ;

interface Props {
  data: CardData,
  index: number
}

interface DragItem {
  index: number
  id: string
  type: string,
  content: string
}

const Card: React.FC<Props> = ({ data, index }) => {

  const ref = useRef<HTMLDivElement>(null);

  const { move } =  useContext(BoardContenxt);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, id: data.id, content: data.content },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: DragItem, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      if (targetSize) {
        const targetCenter = (targetSize.bottom - targetSize.top) / 2;

        const draggerOffset = monitor.getClientOffset();
        if (draggerOffset) {
          const draggedTop = draggerOffset.y - targetSize.top;
          if (draggedIndex < targetIndex && draggedTop < targetCenter)
            return;
          if (draggedIndex > targetIndex && draggedTop > targetCenter)
            return;

            move(draggedIndex, targetIndex);
        }
      }
    }
  });

  dragRef(dropRef(ref));


  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label color={label} key={label} />)}
      </header>
      <p>{data.content}</p>
      {
        data.user && (
          <img src={data.user} alt="Avatar" />
        )
      }
    </Container>
  );
};

export default Card;
