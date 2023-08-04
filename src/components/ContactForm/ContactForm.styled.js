import styled from 'styled-components';
import { TiUserAddOutline } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';

export const AddContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 10px 30px;
  background-color: #e0f7fa;
  color: #00838f;
  border: 5px double #000;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
`;

export const AddIcon = styled(TiUserAddOutline)`
  color: #00838f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 20px;
  height: 20px;
  border: 1px solid #00838f;
  border-radius: 50%;
  padding: 10px;
  &:hover {
    background-color: rgba(245, 244, 154, 1);
  }
`;
export const CloseIcon = styled(RiCloseLine)`
  color: #00838f;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 20px;
  height: 20px;
  border: 1px solid #00838f;
  border-radius: 50%;
  padding: 10px;
  &:hover {
    background-color: rgba(245, 244, 154, 1);
  }
`;
export const ButtonAdd = styled.button`
  border: none;
  border-radius: 50%;
  background-color: inherit;
`;

export const Input = styled.input`
  width: 235px;
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid #00838f;
  margin-right: 50px;
  outline: none;
  color: #00838f;
  height: 20px;
  font-family: inherit;
  font-size: 18px;

  &::placeholder {
    color: #60c7d1;
  }

  ,
  &:focus {
    outline: 1px solid #00838f;
  }
`;
