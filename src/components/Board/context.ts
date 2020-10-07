import { createContext } from 'react';
import { Collumn } from '../../services/api';

interface BoardContext {
    move: (listIndex: number,toList: number, from: number, to: number) => void,
    lists: Collumn[]
}

export default createContext<BoardContext>({

} as BoardContext);