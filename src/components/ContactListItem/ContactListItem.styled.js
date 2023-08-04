import styled from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
  font-family: inherit;
  sans-serif;
  font-weight: 500;
  font-size: 1.2rem;    
  line-height: 1.4375em;
  letter-spacing: 0.1em;
`;

export const Text = styled.p`
  width: 300px;
`;
export const ButtonDelete = styled.button`
  border: none;
  border-radius: 50%;
  background-color: inherit;
`;

export const IconDelete = styled(RiDeleteBin6Line)`
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
