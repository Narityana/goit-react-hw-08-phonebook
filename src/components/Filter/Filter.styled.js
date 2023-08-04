import styled from 'styled-components';
import { MdOutlinePersonSearch } from 'react-icons/md';

export const SearchContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 10px 30px;
  background-color: #e0f7fa;
  color: #00838f;
  border: 5px double #000;
  border-top: none;
  border-radius: 0 0 10px 10px;
`;

export const Form = styled.form`
  background-color: #e0f7fa;
  margin: 0 auto 2px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  align-items: center;
  border: 5px double #000;
  border-bottom: none;
`;

export const Input = styled.input`
  width: 520px;
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

export const Label = styled.label`
  margin-top: 10px;
  color: #00838f;
  font-size: 20px;
`;

export const SearchIcon = styled(MdOutlinePersonSearch)`
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

export const SearhcButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: inherit;
`;
