import styled from 'styled-components';

interface ContainerData{
    done?: boolean,
}

export const Container = styled.div< ContainerData >`
    padding: 0 15px;    
    flex: 0 0 320px;
    opacity: ${props=> props.done ? 0.6 : 1};
    width: 100%;

    & + div{ 
        border-left: 1px solid rgba(0, 0, 0, 0.5);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        h2{
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            height: 42px;
            width: 42px;
            border-radius: 18px;
            background: #3b5dfd;
            border: 0;
            cursor: pointer;
        }
    }

    ul{
        margin-top: 30px;
        width: 100%;
        height: 100%;        
        overflow-y: auto;  
    }
  
`;