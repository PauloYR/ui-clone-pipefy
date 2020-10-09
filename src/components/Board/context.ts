import { createContext } from 'react';
import { Collumn } from '../../services/api';

interface BoardContext {
    move: (listIndex: number,toList: number, from: number, to: number,hover: boolean,end: boolean) => void,
    lists: Collumn[],
    setLists: React.Dispatch<React.SetStateAction<Collumn[]>>
}

export default createContext<BoardContext>({

} as BoardContext);