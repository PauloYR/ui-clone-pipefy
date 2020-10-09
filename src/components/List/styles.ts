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
        margin-top: 10px;
        width: 100%;
        height: 90%;        
        overflow-y: auto;  
    }
  
`;

export const AddCard = styled.div`
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);  
  display: flex;
  align-items: center;
  flex-direction: column;

  input{
      border: 0;
      background: #E5F0E7;
      border-radius: 10px;
      margin-top: 0px;
      padding: 5px 10px;
      height: 40px;
      width: 100%;
      font-family:"Roboto" , sans-serif;

      font-weight: 500;
      line-height: 20px;
      
      &::placeholder{
        color: #BCDCC1;
      }
  }

  button{
      margin-top: 10px;
      background: #3b5dfd;
      color: #FFF;
      border: 0;
      padding: 10px;
      border-radius: 10px;
      font-size: 10px;
      font-family:"Roboto" , sans-serif;
      font-weight: 500;
      width: 100%;
      float: left;
      cursor: pointer;
  }
`;