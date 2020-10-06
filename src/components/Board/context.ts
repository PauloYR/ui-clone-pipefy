import { createContext } from 'react';
import { Collumn } from '../../services/api';

interface BoardContext {
    move: (from: any, to: any) => void,
    lists: Collumn[]
}

export default createContext<BoardContext>({

} as BoardContext);